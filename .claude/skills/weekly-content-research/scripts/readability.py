#!/usr/bin/env python3
"""Flesch-Kincaid readability checker. Target grade level: ~4.

Usage:
  python readability.py <file>
  cat file.md | python readability.py

Prints the grade level, reading ease, and flags long sentences to shorten.
"""
import sys
import re


def count_syllables(word: str) -> int:
    word = re.sub(r"[^a-z]", "", word.lower())
    if not word:
        return 0
    vowels = "aeiouy"
    count = 0
    prev_vowel = False
    for ch in word:
        is_vowel = ch in vowels
        if is_vowel and not prev_vowel:
            count += 1
        prev_vowel = is_vowel
    if word.endswith("e") and count > 1:  # silent trailing e
        count -= 1
    return max(count, 1)


def strip_markup(text: str) -> str:
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)  # code fences
    text = re.sub(r"`[^`]*`", " ", text)                      # inline code
    text = re.sub(r"https?://\S+", " ", text)                 # urls
    text = re.sub(r"[#>*_|\[\]()]", " ", text)                # md symbols
    text = re.sub(r"^\s*[-–—•💬⚠️🎬📱]+", " ", text, flags=re.MULTILINE)
    return text


def analyze(text: str):
    text = strip_markup(text)
    sentences = [s for s in re.split(r"[.!?\n]+", text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    n_sent = max(len(sentences), 1)
    n_words = max(len(words), 1)
    n_syll = sum(count_syllables(w) for w in words)
    fk = 0.39 * (n_words / n_sent) + 11.8 * (n_syll / n_words) - 15.59
    fre = 206.835 - 1.015 * (n_words / n_sent) - 84.6 * (n_syll / n_words)
    return fk, fre, n_words, n_sent, sentences


def main() -> None:
    if len(sys.argv) > 1:
        with open(sys.argv[1], encoding="utf-8") as f:
            text = f.read()
    else:
        text = sys.stdin.read()

    fk, fre, n_words, n_sent, sentences = analyze(text)
    print(f"Words: {n_words}   Sentences: {n_sent}")
    print(f"Flesch-Kincaid Grade Level: {fk:.1f}   (target: <= 4.0)")
    print(f"Flesch Reading Ease:        {fre:.0f}   (higher = easier)")
    print(f"Status: {'PASS' if fk <= 4.5 else 'NEEDS SIMPLIFYING'}")

    long_ones = []
    for s in sentences:
        wc = len(re.findall(r"[A-Za-z']+", s))
        if wc > 14:
            long_ones.append((wc, " ".join(s.split())))
    if long_ones:
        print("\nLong lines to shorten (>14 words):")
        for wc, s in sorted(long_ones, reverse=True)[:10]:
            print(f"  [{wc}w] {s[:80]}")


if __name__ == "__main__":
    main()
