import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-coral to-terracotta">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Ready to tell your story?
          </h2>
          <p className="mt-4 font-body text-white/80 text-lg">
            Let&apos;s create something beautiful together. Your first consultation is free.
          </p>
          <a
            href="mailto:hello@framestory.co"
            className="mt-8 inline-flex items-center px-8 py-3.5 bg-white text-terracotta font-heading font-bold text-lg rounded-full hover:bg-white/90 transition-colors"
          >
            Book Your Session
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
