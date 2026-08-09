const STEPS = [
  {
    name: "Understand",
    description: "We start with your business, not a checklist.",
  },
  {
    name: "Structure",
    description: "Entity and financial structure built around how you operate.",
  },
  {
    name: "Strategize",
    description: "A tax and financial plan set before decisions are made.",
  },
  {
    name: "Execute",
    description: "Ongoing advisory as the business and its needs change.",
  },
];

export default function AdvisoryApproach() {
  return (
    <section className="border-t border-line px-6 py-16 sm:px-10 md:py-20">
      <p className="mb-10 text-center text-[0.62rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        Advisory Approach
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <div
            key={step.name}
            className={`text-center sm:px-6 ${
              i > 0 ? "sm:border-l sm:border-line" : ""
            }`}
          >
            <h3 className="font-display mb-3 text-sm font-normal tracking-[0.1em] text-accent uppercase">
              {step.name}
            </h3>
            <p className="text-sm font-light text-fg-soft">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
