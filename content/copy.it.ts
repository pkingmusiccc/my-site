import { CANTONS, type Copy } from "./copy.en";

export const copy: Copy = {
  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "Distributore", href: "#partner" },
      { label: "Prodotti", href: "#lineup" },
      { label: "Professionisti", href: "#ready" },
    ],
    cta: { label: "Diventare partner", href: "#ready" },
  },

  hero: {
    eyebrow: "Cosmesi dermatologica.",
    headline: "Trattamenti guidati dalla scienza che distinguono il suo studio.",
    sub: "TAO Cosmetics unisce precisione clinica ed efficacia naturale. Disponibile esclusivamente presso estetiste qualificate, dermatologi e istituti professionali in Svizzera.",
    primaryCta: { label: "Fissare un colloquio", href: "#ready" },
    secondaryCta: { label: "Esplorare le linee", href: "#lineup" },
  },

  challenge: {
    eyebrow: "La sfida",
    headline: "I suoi clienti si aspettano risultati che un marchio da drogheria non può offrire.",
    lead: "Scegliere una linea professionale è una decisione di fiducia, per lei e per le persone che le affidano la propria pelle.",
    items: [
      { title: "Cosa vogliono vedere i suoi clienti", body: "Miglioramenti visibili e misurabili, non promesse vaghe." },
      { title: "Cosa le serve", body: "Formulazioni con provenienza tracciabile, principi attivi chiaramente dichiarati e qualità costante." },
      { title: "Cosa vuole evitare", body: "Marchi di massa che indeboliscono il suo posizionamento e rendono la sua competenza intercambiabile." },
    ],
  },

  partner: {
    eyebrow: "Siamo Vitracosmetics",
    headlineBefore: "",
    headlineAfter: ", portato in Svizzera.",
    headlineAria: "TAO Cosmetics, portato in Svizzera.",
    lead: "Come distributore svizzero esclusivo comprendiamo due cose: le esigenze della sua pratica quotidiana e il linguaggio di TAO. Uniamo le due con un referente dedicato, una logistica precisa e una formazione che rende sicuro il suo team.",
    bullets: [
      "Esclusivo in Svizzera. Un'unica fonte, condizioni chiare.",
      "Eredità di formulazione farmaceutica, prodotto in Germania.",
      "Supporto partner in DE, FR e IT.",
    ],
    endorsement: "Distributore svizzero esclusivo",
  },

  path: {
    eyebrow: "Il percorso è semplice",
    headline: "Tre passi per una partnership TAO.",
    steps: [
      { index: "01", code: "Richiesta", title: "Ci racconti del suo studio", body: "Una breve conversazione o un modulo compilato bastano. Valutiamo insieme la coerenza." },
      { index: "02", code: "Avvio", title: "La mettiamo in condizione di partire", body: "Conto pro aperto, team formato sui prodotti, primo ordine in viaggio." },
      { index: "03", code: "Crescita", title: "I suoi clienti vedono risultati", body: "Costruisce una clientela fedele, distingue la sua offerta e fa crescere il fatturato." },
    ],
    cta: { label: "Fissare un colloquio", href: "#ready" },
  },

  lineup: {
    eyebrow: "Le linee",
    headline: "Nove linee. Una filosofia.",
    lead: "Per ogni tipo di pelle, ogni indicazione, ogni rituale, sempre formulato con la stessa cura.",
    ranges: [
      { index: "01", name: "TAO Clean", description: "Detersione che rispetta la barriera cutanea.", image: "/products/01-clean.jpg" },
      { index: "02", name: "TAO Light", description: "Per pelli da normali a miste.", image: "/products/02-light.jpg" },
      { index: "03", name: "TAO Dry", description: "Cura nutriente per pelli secche.", image: "/products/03-dry.jpg" },
      { index: "04", name: "TAO Glossy", description: "Luminosità e idratazione profonda.", image: "/products/04-glossy.jpg" },
      { index: "05", name: "TAO More", description: "Attivi mirati per esigenze specifiche.", image: "/products/05-more.jpg" },
      { index: "06", name: "TAO Man", description: "Cura che comprende la pelle maschile.", image: "/products/06-man.jpg" },
      { index: "07", name: "TAO Body", description: "Un rituale dal collo ai piedi.", image: "/products/07-body.jpg" },
      { index: "08", name: "TAO Sun", description: "Protezione e cura in un solo gesto.", image: "/products/08-sun.jpg" },
      { index: "09", name: "Epiceutical®", description: "La linea anti-età per pelli esigenti.", image: "/products/09-epiceutical.jpg" },
    ],
  },

  ready: {
    eyebrow: "Pronto?",
    headline: "Parliamo della sua partnership.",
    sub: "Venti minuti bastano per capire se TAO è la linea giusta per il suo studio.",
    ctas: {
      call: { label: "Fissare un colloquio", href: "#enquiry-form" },
      write: { label: "Contattarci", href: "#enquiry-form" },
    },
    form: {
      heading: "Richiesta professionale",
      lead: "Ci racconti qualcosa del suo studio. Rispondiamo entro 24 ore.",
      businessName: { label: "Attività", placeholder: "es. Clinique du Léman" },
      contactName: { label: "Il suo nome", placeholder: "Nome e cognome" },
      role: {
        label: "Il suo ruolo",
        placeholder: "Selezioni il suo ruolo",
        options: [
          { value: "Dermatologist", label: "Dermatologo/a" },
          { value: "Medspa", label: "Medspa" },
          { value: "Spa", label: "Spa" },
          { value: "Hotel", label: "Hotel" },
          { value: "Clinic", label: "Clinica" },
          { value: "Boutique", label: "Boutique" },
          { value: "Cosmetician", label: "Estetista" },
          { value: "Other", label: "Altro" },
        ],
      },
      email: { label: "E-mail", placeholder: "nome@attivita.ch" },
      phone: { label: "Telefono", placeholder: "+41 …" },
      canton: { label: "Cantone", placeholder: "Selezioni il cantone", options: [...CANTONS] },
      message: {
        label: "Qualcosa da segnalarci (facoltativo)",
        placeholder: "La sua carta trattamenti, la clientela, cosa sta cercando.",
      },
      consent: {
        label: "Acconsento a essere contattato/a da Vitracosmetics per una partnership professionale.",
      },
      submit: { label: "Inviare la richiesta" },
      sending: "Invio in corso…",
      replyBadge: "Risposta entro 24 ore",
      success: {
        heading: "Grazie.",
        body: "La sua richiesta è stata inviata al team Vitracosmetics. Rispondiamo entro 24 ore.",
      },
      error: {
        body: "Si è verificato un problema nell'invio. Riprovi tra un momento o ci scriva direttamente.",
      },
    },
  },

  footer: {
    copyright: (year: number) => `© ${year}. Tutti i diritti riservati.`,
  },
};
