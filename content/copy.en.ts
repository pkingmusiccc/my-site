export interface Copy {
  nav: {
    links: { label: string; href: string }[];
    cta: { label: string; href: string };
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  challenge: {
    eyebrow: string;
    headline: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  partner: {
    eyebrow: string;
    headlineBefore: string;
    headlineAfter: string;
    headlineAria: string;
    lead: string;
    bullets: string[];
    endorsement: string;
  };
  path: {
    eyebrow: string;
    headline: string;
    steps: { index: string; code: string; title: string; body: string }[];
    cta: { label: string; href: string };
  };
  lineup: {
    eyebrow: string;
    headline: string;
    lead: string;
    ranges: {
      index: string;
      name: string;
      description: string;
      image: string;
    }[];
  };
  ready: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctas: {
      call: { label: string; href: string };
      write: { label: string; href: string };
    };
    form: {
      heading: string;
      lead: string;
      businessName: { label: string; placeholder: string };
      contactName: { label: string; placeholder: string };
      role: {
        label: string;
        placeholder: string;
        options: { value: string; label: string }[];
      };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      canton: {
        label: string;
        placeholder: string;
        options: string[];
      };
      message: { label: string; placeholder: string };
      consent: { label: string };
      submit: { label: string };
      sending: string;
      replyBadge: string;
      success: { heading: string; body: string };
      error: { body: string };
    };
  };
  footer: {
    copyright: (year: number) => string;
  };
}

export const CANTONS = [
  "AG", "AI", "AR", "BE", "BL", "BS", "FR", "GE", "GL", "GR",
  "JU", "LU", "NE", "NW", "OW", "SG", "SH", "SO", "SZ", "TG",
  "TI", "UR", "VD", "VS", "ZG", "ZH",
] as const;

export const ROLES = [
  "Dermatologist",
  "Medspa",
  "Spa",
  "Hotel",
  "Clinic",
  "Boutique",
  "Cosmetician",
  "Other",
] as const;

export type RoleValue = (typeof ROLES)[number];

export const copy: Copy = {
  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "Distributor", href: "#partner" },
      { label: "Products", href: "#lineup" },
      { label: "Professionals", href: "#ready" },
    ],
    cta: { label: "Become a partner", href: "#ready" },
  },

  hero: {
    eyebrow: "Dermatological skincare.",
    headline: "Science-led treatments that set your practice apart.",
    sub: "TAO Cosmetics pairs clinical precision with natural efficacy. Available only to qualified aestheticians, dermatologists, and professional institutes across Switzerland.",
    primaryCta: { label: "Book a call", href: "#ready" },
    secondaryCta: { label: "Explore the ranges", href: "#lineup" },
  },

  challenge: {
    eyebrow: "The challenge",
    headline: "Your clients want results a drugstore brand cannot deliver.",
    lead: "Choosing a professional line is a trust decision, for you and for the people who put their skin in your hands.",
    items: [
      {
        title: "What your clients want to see",
        body: "Visible, measurable improvements, not vague promises.",
      },
      {
        title: "What you need",
        body: "Formulations with traceable provenance, clearly declared actives, and consistent quality.",
      },
      {
        title: "What you want to avoid",
        body: "Mass brands that dilute your positioning and make your expertise feel interchangeable.",
      },
    ],
  },

  partner: {
    eyebrow: "We are Vitracosmetics",
    headlineBefore: "Bringing ",
    headlineAfter: " to Switzerland.",
    headlineAria: "Bringing TAO Cosmetics to Switzerland.",
    lead: "As the exclusive Swiss distributor, we understand two things: the demands of your daily practice and the language of TAO. We bridge the two with a named account contact, precise logistics, and training that makes your team confident.",
    bullets: [
      "Exclusive in Switzerland. A single source, clear terms.",
      "Pharmaceutical-grade formulation heritage, made in Germany.",
      "Partner support in DE, FR, and IT.",
    ],
    endorsement: "Exclusive Swiss distributor",
  },

  path: {
    eyebrow: "The path is simple",
    headline: "Three steps to a TAO partnership.",
    steps: [
      {
        index: "01",
        code: "Apply",
        title: "Tell us about your practice",
        body: "A short conversation or a completed form is enough. We review the fit.",
      },
      {
        index: "02",
        code: "Onboard",
        title: "We get you set up",
        body: "Pro account opened, team trained on the product, first order on its way.",
      },
      {
        index: "03",
        code: "Grow",
        title: "Your clients see results",
        body: "You build returning clients, differentiate your offering, and grow revenue.",
      },
    ],
    cta: { label: "Book a call", href: "#ready" },
  },

  lineup: {
    eyebrow: "The line-up",
    headline: "Nine ranges. One philosophy.",
    lead: "For every skin type, every indication, every ritual, always formulated with the same care.",
    ranges: [
      { index: "01", name: "TAO Clean", description: "Cleansing that respects the skin barrier.", image: "/products/01-clean.jpg" },
      { index: "02", name: "TAO Light", description: "For normal to combination skin.", image: "/products/02-light.jpg" },
      { index: "03", name: "TAO Dry", description: "Nourishing care for dry skin.", image: "/products/03-dry.jpg" },
      { index: "04", name: "TAO Glossy", description: "Radiance and deep hydration.", image: "/products/04-glossy.jpg" },
      { index: "05", name: "TAO More", description: "Targeted actives for specific needs.", image: "/products/05-more.jpg" },
      { index: "06", name: "TAO Man", description: "Skincare that understands men's skin.", image: "/products/06-man.jpg" },
      { index: "07", name: "TAO Body", description: "A ritual from neck to toes.", image: "/products/07-body.jpg" },
      { index: "08", name: "TAO Sun", description: "Protection and care in a single step.", image: "/products/08-sun.jpg" },
      { index: "09", name: "Epiceutical®", description: "The anti-ageing line for demanding skin.", image: "/products/09-epiceutical.jpg" },
    ],
  },

  ready: {
    eyebrow: "Ready?",
    headline: "Let's talk about your partnership.",
    sub: "Twenty minutes is enough to see if TAO is the right fit for your practice.",
    ctas: {
      call: { label: "Book a call", href: "#enquiry-form" },
      write: { label: "Get in touch", href: "#enquiry-form" },
    },
    form: {
      heading: "Professional enquiry",
      lead: "Tell us a little about your practice. We reply within 24 hours.",
      businessName: { label: "Business", placeholder: "e.g. Clinique du Léman" },
      contactName: { label: "Your name", placeholder: "Full name" },
      role: {
        label: "Your role",
        placeholder: "Select your role",
        options: [
          { value: "Dermatologist", label: "Dermatologist" },
          { value: "Medspa", label: "Medspa" },
          { value: "Spa", label: "Spa" },
          { value: "Hotel", label: "Hotel" },
          { value: "Clinic", label: "Clinic" },
          { value: "Boutique", label: "Boutique" },
          { value: "Cosmetician", label: "Cosmetician" },
          { value: "Other", label: "Other" },
        ],
      },
      email: { label: "Email", placeholder: "name@business.ch" },
      phone: { label: "Phone", placeholder: "+41 …" },
      canton: {
        label: "Canton",
        placeholder: "Select your canton",
        options: [...CANTONS],
      },
      message: {
        label: "Anything we should know (optional)",
        placeholder:
          "Your treatment menu, your clientele, what you're looking for.",
      },
      consent: {
        label:
          "I agree to be contacted by Vitracosmetics about a professional partnership.",
      },
      submit: { label: "Send enquiry" },
      sending: "Sending…",
      replyBadge: "Reply within 24 hours",
      success: {
        heading: "Thank you.",
        body: "Your enquiry is with the Vitracosmetics team. We reply within 24 hours.",
      },
      error: {
        body: "Something went wrong sending your enquiry. Please try again in a moment, or email us directly.",
      },
    },
  },

  footer: {
    copyright: (year: number) => `© ${year}. All rights reserved.`,
  },
};
