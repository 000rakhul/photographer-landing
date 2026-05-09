import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Share Your Vision",
    description: "Tell us about your story — your style, your vibe, and what matters most to you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "We Capture the Magic",
    description: "On shoot day, we create a relaxed, fun experience and capture every authentic moment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Relive Your Story",
    description: "Receive your beautifully edited gallery — ready to share, print, and treasure forever.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-charcoal">
            How It Works
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Dotted connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-coral/30" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} stagger={i + 1}>
              <div className="flex flex-col items-center text-center relative">
                <div className="w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center font-heading font-bold text-xl relative z-10">
                  {step.number}
                </div>
                <div className="mt-5 text-coral">{step.icon}</div>
                <h3 className="mt-4 font-heading font-bold text-xl text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-charcoal/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
