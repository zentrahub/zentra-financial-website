const AREAS = [
  {
    idx: "01",
    name: "Tax Strategy",
    description:
      "Advanced tax planning and strategy for business owners and high-income clients.",
  },
  {
    idx: "02",
    name: "CFO & Financial Advisory",
    description:
      "Financial clarity, strategic decision support and higher-level financial guidance.",
  },
  {
    idx: "03",
    name: "Entity Architecture",
    description:
      "Business and entity structuring for U.S. and international entrepreneurs.",
  },
  {
    idx: "04",
    name: "Corporate Tax & Accounting",
    description:
      "Corporate tax compliance, accounting and financial reporting for established businesses.",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-line px-6 py-16 sm:px-10 md:py-20"
    >
      <p className="mb-10 text-center text-[0.62rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        Expertise
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map((area, i) => (
          <div
            key={area.idx}
            className={`px-0 text-center sm:px-6 ${
              i > 0 ? "sm:border-l sm:border-line" : ""
            }`}
          >
            <p className="mb-3 text-[0.64rem] font-light text-fg-soft">
              {area.idx}
            </p>
            <h3 className="font-display mb-3 text-lg font-extralight">
              {area.name}
            </h3>
            <p className="text-sm font-light text-fg-soft">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
