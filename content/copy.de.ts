import { CANTONS, type Copy } from "./copy.en";

export const copy: Copy = {
  nav: {
    links: [
      { label: "Start", href: "#top" },
      { label: "Distributor", href: "#partner" },
      { label: "Produkte", href: "#lineup" },
      { label: "Fachkunden", href: "#ready" },
    ],
    cta: { label: "Partner werden", href: "#ready" },
  },

  hero: {
    eyebrow: "Schönheit ist Gesundheit.",
    headline: "Wissenschaftlich geführte Behandlungen, die Ihre Praxis abheben.",
    sub: "TAO Cosmetics verbindet klinische Präzision mit natürlicher Wirksamkeit. Erhältlich ausschliesslich für qualifizierte Kosmetikerinnen, Dermatologen und Fachinstitute in der Schweiz.",
    primaryCta: { label: "Gespräch buchen", href: "#ready" },
    secondaryCta: { label: "Produktlinien entdecken", href: "#lineup" },
  },

  challenge: {
    eyebrow: "Die Herausforderung",
    headline: "Ihre Kundschaft erwartet Resultate, die eine Drogeriemarke nicht liefern kann.",
    lead: "Die Wahl einer Fachmarke ist eine Vertrauensentscheidung, für Sie und für die Menschen, die Ihnen ihre Haut anvertrauen.",
    items: [
      { title: "Was Ihre Kundschaft sehen will", body: "Sichtbare, messbare Verbesserungen, keine vagen Versprechen." },
      { title: "Was Sie brauchen", body: "Formulierungen mit nachvollziehbarer Herkunft, klar deklarierten Wirkstoffen und gleichbleibender Qualität." },
      { title: "Was Sie vermeiden möchten", body: "Massenmarken, die Ihre Positionierung verwässern und Ihre Expertise austauschbar wirken lassen." },
    ],
  },

  partner: {
    eyebrow: "Wir sind Vitracosmetics",
    headlineBefore: "",
    headlineAfter: " in die Schweiz bringen.",
    headlineAria: "TAO Cosmetics in die Schweiz bringen.",
    lead: "Als exklusiver Schweizer Distributor verstehen wir zwei Dinge: die Anforderungen Ihres Praxisalltags und die Sprache von TAO. Wir verbinden beides mit einer persönlichen Kundenbetreuung, präziser Logistik und einer Schulung, die Ihr Team sicher macht.",
    bullets: [
      "Exklusiv in der Schweiz. Eine Bezugsquelle, klare Konditionen.",
      "Pharmazeutisches Formulierungserbe, hergestellt in Deutschland.",
      "Fachsupport in DE, FR und IT.",
    ],
    endorsement: "Exklusiver Schweizer Distributor",
  },

  path: {
    eyebrow: "Der Weg ist einfach",
    headline: "In drei Schritten zur TAO-Partnerschaft.",
    steps: [
      { index: "01", code: "Anfrage", title: "Erzählen Sie uns von Ihrer Praxis", body: "Ein kurzes Gespräch oder ein ausgefülltes Formular genügt. Wir prüfen die Passung." },
      { index: "02", code: "Onboarding", title: "Wir richten Sie ein", body: "Fachkundenkonto eröffnet, Team geschult, erste Bestellung unterwegs." },
      { index: "03", code: "Wachstum", title: "Ihre Kundschaft sieht Ergebnisse", body: "Sie gewinnen Stammkunden, schärfen Ihr Angebot und steigern Ihren Umsatz." },
    ],
    cta: { label: "Gespräch buchen", href: "#ready" },
  },

  lineup: {
    eyebrow: "Die Produktlinien",
    headline: "TAOs Philosophie: Schönheit ist Gesundheit.",
    lead: "Für jeden Hauttyp, jede Indikation, jedes Ritual, stets mit derselben Sorgfalt formuliert.",
    ranges: [
      { index: "01", name: "TAO Clean", description: "Reinigung, die die Hautbarriere respektiert.", image: "/products/01-clean.jpg" },
      { index: "02", name: "TAO Light", description: "Für normale bis Mischhaut.", image: "/products/02-light.jpg" },
      { index: "03", name: "TAO Dry", description: "Nährende Pflege für trockene Haut.", image: "/products/03-dry.jpg" },
      { index: "04", name: "TAO Glossy", description: "Strahlkraft und tiefe Hydratation.", image: "/products/04-glossy.jpg" },
      { index: "05", name: "TAO More", description: "Gezielte Wirkstoffe für besondere Bedürfnisse.", image: "/products/05-more.jpg" },
      { index: "06", name: "TAO Man", description: "Hautpflege, die Männerhaut versteht.", image: "/products/06-man.jpg" },
      { index: "07", name: "TAO Body", description: "Ein Ritual von Hals bis Fuss.", image: "/products/07-body.jpg" },
      { index: "08", name: "TAO Sun", description: "Schutz und Pflege in einem Schritt.", image: "/products/08-sun.jpg" },
      { index: "09", name: "Epiceutical®", description: "Die Anti-Aging-Linie für anspruchsvolle Haut.", image: "/products/09-epiceutical.jpg" },
    ],
  },

  ready: {
    eyebrow: "Bereit?",
    headline: "Sprechen wir über Ihre Partnerschaft.",
    sub: "Zwanzig Minuten genügen, um zu sehen, ob TAO zu Ihrer Praxis passt.",
    ctas: {
      call: { label: "Gespräch buchen", href: "#enquiry-form" },
      write: { label: "Kontakt aufnehmen", href: "#enquiry-form" },
    },
    form: {
      heading: "Fachkundenanfrage",
      lead: "Erzählen Sie uns kurz von Ihrer Praxis. Wir antworten innerhalb von 24 Stunden.",
      businessName: { label: "Unternehmen", placeholder: "z. B. Clinique du Léman" },
      contactName: { label: "Ihr Name", placeholder: "Vor- und Nachname" },
      role: {
        label: "Ihre Rolle",
        placeholder: "Rolle auswählen",
        options: [
          { value: "Dermatologist", label: "Dermatologe/-in" },
          { value: "Medspa", label: "Medspa" },
          { value: "Spa", label: "Spa" },
          { value: "Hotel", label: "Hotel" },
          { value: "Clinic", label: "Klinik" },
          { value: "Boutique", label: "Boutique" },
          { value: "Cosmetician", label: "Kosmetiker/-in" },
          { value: "Other", label: "Andere" },
        ],
      },
      email: { label: "E-Mail", placeholder: "name@unternehmen.ch" },
      phone: { label: "Telefon", placeholder: "+41 …" },
      canton: { label: "Kanton", placeholder: "Kanton auswählen", options: [...CANTONS] },
      message: {
        label: "Was sollen wir sonst wissen? (optional)",
        placeholder: "Ihr Behandlungsangebot, Ihre Kundschaft, wonach Sie suchen.",
      },
      consent: {
        label: "Ich willige ein, von Vitracosmetics zu einer Fachpartnerschaft kontaktiert zu werden.",
      },
      submit: { label: "Anfrage senden" },
      sending: "Wird gesendet…",
      replyBadge: "Antwort innerhalb von 24 Stunden",
      success: {
        heading: "Vielen Dank.",
        body: "Ihre Anfrage liegt beim Vitracosmetics-Team. Wir antworten innerhalb von 24 Stunden.",
      },
      error: {
        body: "Beim Senden Ihrer Anfrage ist etwas schiefgelaufen. Bitte versuchen Sie es gleich noch einmal oder schreiben Sie uns direkt.",
      },
    },
  },

  footer: {
    emailLink: "Schreiben Sie uns",
    copyright: (year: number) => `© ${year}. Alle Rechte vorbehalten.`,
  },
};
