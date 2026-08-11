// Every user-facing string on the site lives here — components read from
// this object instead of hardcoding text, so a future es.ts is additive
// (translate this file, no component changes). See src/i18n/index.ts.
export const en = {
  meta: {
    title: "Zentra Financial — Premium Tax Strategy & Financial Advisory",
    description:
      "Zentra Financial advises established business owners on tax strategy, financial structure, and business architecture, in the United States and abroad.",
    jsonLdDescription:
      "Premium tax strategy and financial advisory for established business owners.",
  },

  nav: {
    homeAriaLabel: "Zentra Financial home",
    menu: "Menu",
    expertise: "Expertise",
    about: "About",
    contact: "Private Consultation",
    clientPortal: "Client Portal",
    requestConsultation: "Request Private Consultation",
  },

  hero: {
    kicker: "Strategic Financial Advisory",
    headline: "Built for owners making bigger decisions.",
    sub: "Tax strategy, financial advisory and entity structuring for established business owners.",
    primaryCta: "Request Private Consultation",
    secondaryCta: "Explore Our Expertise",
    fineprint:
      "We work selectively with established business owners, entrepreneurs and privately held companies.",
  },

  expertise: {
    label: "Expertise",
  },

  positioning: {
    statementPrefix: "Tax preparation tells you what happened.",
    statementHighlight: "Strategy helps determine what happens next.",
    body: "Zentra Financial is designed to advise business owners before major financial, tax and structural decisions are made — not after.",
  },

  whoWeWorkWith: {
    label: "Who We Work With",
    profiles: [
      "Established Business Owners",
      "Entrepreneurs With Growing Complexity",
      "Privately Held Companies",
      "U.S. and International Business Owners",
      "High-Income Professionals With Business Interests",
    ],
  },

  advisoryApproach: {
    label: "Advisory Approach",
    steps: [
      {
        name: "Understand",
        description: "We start with your business, not a checklist.",
      },
      {
        name: "Structure",
        description:
          "Entity and financial structure built around how you operate.",
      },
      {
        name: "Strategize",
        description: "A tax and financial plan set before decisions are made.",
      },
      {
        name: "Execute",
        description: "Ongoing advisory as the business and its needs change.",
      },
    ],
  },

  selectiveEngagement: {
    headline: "Not every client needs Zentra.",
    body: "Zentra delivers the greatest value when business decisions have meaningful financial and tax consequences.",
    cta: "Request Private Consultation",
    fineprint:
      "Most new relationships begin through referral, introduction or a private consultation request.",
  },

  footer: {
    expertise: "Expertise",
    about: "About",
    privateConsultation: "Private Consultation",
    clientPortal: "Client Portal",
    privacy: "Privacy",
    terms: "Terms",
  },

  consultationForm: {
    title: "Private Consultation Request",
    subtitle:
      "A brief description helps us understand whether we're a fit before we speak.",
    closeAriaLabel: "Close",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      revenue: "Approximate Annual Revenue",
      interest: "Primary Area of Interest",
      source: "How did you hear about Zentra?",
      description: "Short Description",
    },
    selectPlaceholder: "Select",
    revenueRanges: [
      "Under $250K",
      "$250K–$500K",
      "$500K–$1M",
      "$1M–$3M",
      "$3M–$10M",
      "$10M+",
    ],
    areasOfInterest: [
      "Tax Strategy",
      "CFO & Financial Advisory",
      "Entity Architecture",
      "Corporate Tax & Accounting",
      "Not sure yet",
    ],
    submit: "Request Consultation",
    submitting: "Sending…",
    genericError: "Something went wrong.",
    success: {
      title: "Request received.",
      body: "Thank you — we'll be in touch if it looks like a fit.",
      close: "Close",
    },
  },

  legalPlaceholder: {
    eyebrow: "Zentra Financial",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    body: "This page hasn't been published yet. If you have a question in the meantime, request a private consultation and we'll follow up directly.",
    returnHome: "Return Home",
  },

  notFound: {
    eyebrow: "404",
    headline: "This page doesn't exist.",
    body: "The page you're looking for may have moved, or the link may be out of date.",
    returnHome: "Return Home",
  },

  servicesIndex: {
    backToExpertise: "← Expertise",
    whatThisCovers: "What This Covers",
    whoItsFor: "Who It's For",
    otherAreas: "Other Areas",
  },

  services: {
    "tax-strategy": {
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
    "cfo-financial-advisory": {
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
    "entity-architecture": {
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
    "corporate-tax-accounting": {
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
          description:
            "Handled as the execution of a plan already in place, not the starting point.",
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
  },
} as const;
