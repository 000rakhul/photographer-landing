import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Portrait Photography",
    description:
      "Timeless personal and family portraits that capture the essence of who you are — relaxed, authentic, and beautifully lit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Event Photography",
    description:
      "From weddings to milestones, we capture the energy, emotion, and candid moments that make your event unforgettable.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Brand Photography",
    description:
      "Professional imagery for your business — product shots, team headshots, and lifestyle content that elevates your brand.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-light-grey">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-charcoal">
            What We Capture
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} stagger={i + 1}>
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="h-1 w-12 bg-coral rounded-full mb-6" />
                <div className="text-coral mb-4">{s.icon}</div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-charcoal/60 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
