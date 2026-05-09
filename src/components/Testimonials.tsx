import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "FrameStory made our wedding day feel timeless. Every photo captures a feeling, not just a moment. We couldn't be happier.",
    name: "Sarah & James",
    type: "Wedding Photography",
  },
  {
    quote:
      "The brand shoot completely transformed how our customers see us. Professional, warm, and exactly what we needed.",
    name: "Bloom Café",
    type: "Brand Photography",
  },
  {
    quote:
      "I was nervous about a family shoot but the team made everyone feel so relaxed. The photos are now hanging all over our house.",
    name: "The Martinez Family",
    type: "Portrait Photography",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-light-grey">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-charcoal">
            Kind Words
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} stagger={i + 1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-coral/20 mb-4 shrink-0"
                >
                  <path d="M11.3 3.3c-4.1.7-7.3 4-7.3 8v8.7h8V12H6c0-3.3 2.2-6 5.3-6.7L11.3 3.3zm13 0c-4.1.7-7.3 4-7.3 8v8.7h8V12h-6c0-3.3 2.2-6 5.3-6.7L24.3 3.3z" />
                </svg>
                <p className="font-body text-charcoal/70 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-light-grey">
                  <p className="font-heading font-bold text-charcoal">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-coral">{t.type}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
