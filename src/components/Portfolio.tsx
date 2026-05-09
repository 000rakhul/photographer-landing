import ScrollReveal from "./ScrollReveal";

const items = [
  { title: "The Wedding of Sarah & James", category: "Wedding", size: "large", id: 1015 },
  { title: "Brand Refresh — Bloom Café", category: "Brand", size: "small", id: 1060 },
  { title: "Family at Sunset", category: "Portrait", size: "small", id: 1027 },
  { title: "Melbourne Music Festival", category: "Event", size: "small", id: 1062 },
  { title: "CEO Headshot Series", category: "Brand", size: "small", id: 1074 },
  { title: "Autumn Engagement Shoot", category: "Portrait", size: "large", id: 1039 },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-charcoal">
            Stories We&apos;ve Told
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {items.map((item, i) => (
            <ScrollReveal
              key={item.title}
              stagger={(i % 6) + 1}
              className={
                item.size === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }
            >
              <div className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={`https://picsum.photos/id/${item.id}/800/600`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-body text-coral uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-bold text-lg mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
