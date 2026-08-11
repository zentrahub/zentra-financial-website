export type Service = {
  slug: string;
  idx: string;
  name: string;
  shortDescription: string;
  kicker: string;
  headline: string;
  intro: string;
  covers: { title: string; description: string }[];
  whoItsFor: string;
};

export const SERVICES: Service[] = [
  {
    slug: "tax-strategy",
    idx: "01",
    name: "Tax Strategy",
    shortDescription:
      "Advanced tax planning and strategy for business owners and high-income clients.",
    kicker: "Tax Strategy",
    headline: "Tax strategy, planned before the year closes.",
    intro:
      "Most tax work happens after the fact — a filing built from decisions already made. Ours happens before those decisions are made, so the filing is a formality, not a scramble.",
    covers: [
      {
        title: "Multi-year planning",
        description:
          "Tax positions considered across years, not reset every April — timing income, deductions, and major transactions with the next several years in view.",
      },
      {
        title: "Entity-level coordination",
        description:
          "Strategy that accounts for every entity you hold, not just the one that happens to be in front of you this quarter.",
      },
      {
        title: "Income and compensation structuring",
        description:
          "How you pay yourself, and from where, considered as a strategic decision rather than a default.",
      },
      {
        title: "Multi-state and multi-entity exposure",
        description:
          "Coordinated treatment when a business operates, or an owner lives, across more than one jurisdiction.",
      },
    ],
    whoItsFor:
      "Business owners whose tax picture has outgrown a single annual filing — multiple income sources, multiple entities, or decisions ahead that will have tax consequences either way.",
  },
  {
    slug: "cfo-financial-advisory",
    idx: "02",
    name: "CFO & Financial Advisory",
    shortDescription:
      "Financial clarity, strategic decision support and higher-level financial guidance.",
    kicker: "CFO & Financial Advisory",
    headline: "Financial clarity at the level your business has reached.",
    intro:
      "Past a certain point, a business needs someone thinking about its financial position full-time — not just recording it. This is that function, without hiring a full-time CFO.",
    covers: [
      {
        title: "Financial reporting and visibility",
        description:
          "Numbers you can actually make a decision from, not just numbers that satisfy a filing requirement.",
      },
      {
        title: "Cash flow forecasting",
        description:
          "Seeing constraints and opportunities before they arrive, not after.",
      },
      {
        title: "Strategic decision support",
        description:
          "A second, financially literate perspective on the calls that matter — hiring, expansion, major purchases, financing.",
      },
      {
        title: "Investor- and lender-ready financials",
        description:
          "Records that hold up under outside scrutiny, whenever that scrutiny arrives.",
      },
    ],
    whoItsFor:
      "Owners who need a financial partner in the room for major decisions, not just someone who closes the books at year-end.",
  },
  {
    slug: "entity-architecture",
    idx: "03",
    name: "Entity Architecture",
    shortDescription:
      "Business and entity structuring for U.S. and international entrepreneurs.",
    kicker: "Entity Architecture",
    headline: "Structure built for how you actually operate.",
    intro:
      "Most entity structures are set up once, early, and never revisited — even as the business they were built for changes completely. This is structure re-examined against what the business has become.",
    covers: [
      {
        title: "Holding and operating company design",
        description:
          "Separating what you own from what you operate, so liability and ownership don't sit in the same place by accident.",
      },
      {
        title: "Multi-entity coordination",
        description:
          "Structures that work together deliberately, instead of accumulating one entity at a time with no relationship between them.",
      },
      {
        title: "U.S. and international structuring",
        description:
          "For owners and founders operating across borders, or building a U.S. presence from outside it.",
      },
      {
        title: "Structure ahead of a transaction",
        description:
          "Getting the entity picture right before a sale, an investment, or a major restructuring — not during it.",
      },
    ],
    whoItsFor:
      "Businesses with more than one entity, owners with U.S. and international interests, or anyone whose current structure was built for a version of the business that no longer exists.",
  },
  {
    slug: "corporate-tax-accounting",
    idx: "04",
    name: "Corporate Tax & Accounting",
    shortDescription:
      "Corporate tax compliance, accounting and financial reporting for established businesses.",
    kicker: "Corporate Tax & Accounting",
    headline: "Compliance handled inside the strategy, not separate from it.",
    intro:
      "Filings and books still have to get done — accurately, on time, and in a way that reflects the same strategy behind everything else, not treated as a separate task handed off elsewhere.",
    covers: [
      {
        title: "Corporate tax filings",
        description: "Handled as the execution of a plan already in place, not the starting point.",
      },
      {
        title: "Accounting and bookkeeping",
        description:
          "Books built for an established business — accurate enough to make decisions from, and to survive scrutiny.",
      },
      {
        title: "Financial reporting",
        description:
          "Statements that reflect the business accurately, prepared on a schedule you can rely on.",
      },
      {
        title: "Audit-ready records",
        description:
          "Documentation kept in a state where an audit, a diligence process, or a lender review isn't a fire drill.",
      },
    ],
    whoItsFor:
      "Established businesses that want compliance and bookkeeping handled by the same advisory relationship that sets the strategy — not a separate vendor working from a different set of assumptions.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
