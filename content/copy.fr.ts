import { CANTONS, type Copy } from "./copy.en";

export const copy: Copy = {
  nav: {
    links: [
      { label: "Accueil", href: "#top" },
      { label: "Distributeur", href: "#partner" },
      { label: "Produits", href: "#lineup" },
      { label: "Professionnels", href: "#ready" },
    ],
    cta: { label: "Devenir partenaire", href: "#ready" },
  },

  hero: {
    eyebrow: "La beauté, c'est la santé.",
    headline: "Des traitements guidés par la science qui distinguent votre pratique.",
    sub: "TAO Cosmetics allie précision clinique et efficacité naturelle. Réservé aux esthéticiennes qualifiées, aux dermatologues et aux instituts professionnels en Suisse.",
    primaryCta: { label: "Prendre rendez-vous", href: "#ready" },
    secondaryCta: { label: "Explorer les gammes", href: "#lineup" },
  },

  challenge: {
    eyebrow: "L'enjeu",
    headline: "Vos clients attendent des résultats qu'une marque de grande distribution ne peut offrir.",
    lead: "Choisir une ligne professionnelle est une décision de confiance, pour vous et pour les personnes qui vous confient leur peau.",
    items: [
      { title: "Ce que vos clients veulent voir", body: "Des améliorations visibles et mesurables, pas de vagues promesses." },
      { title: "Ce qu'il vous faut", body: "Des formulations à la provenance traçable, aux actifs clairement déclarés et à la qualité constante." },
      { title: "Ce que vous voulez éviter", body: "Les marques grand public qui diluent votre positionnement et rendent votre expertise interchangeable." },
    ],
  },

  partner: {
    eyebrow: "Nous sommes Vitracosmetics",
    headlineBefore: "",
    headlineAfter: ", apporté à la Suisse.",
    headlineAria: "TAO Cosmetics, apporté à la Suisse.",
    lead: "En tant que distributeur suisse exclusif, nous comprenons deux choses: les exigences de votre pratique quotidienne et le langage de TAO. Nous réunissons les deux avec un interlocuteur dédié, une logistique précise et une formation qui donne à votre équipe toute son assurance.",
    bullets: [
      "Exclusif en Suisse. Une source unique, des conditions claires.",
      "Héritage de formulation pharmaceutique, fabriqué en Allemagne.",
      "Support partenaire en DE, FR et IT.",
    ],
    endorsement: "Distributeur suisse exclusif",
  },

  path: {
    eyebrow: "Le chemin est simple",
    headline: "Trois étapes pour un partenariat TAO.",
    steps: [
      { index: "01", code: "Demande", title: "Présentez-nous votre pratique", body: "Un court échange ou un formulaire rempli suffit. Nous étudions la bonne adéquation." },
      { index: "02", code: "Démarrage", title: "Nous prenons le relais", body: "Compte pro ouvert, équipe formée aux produits, première commande en route." },
      { index: "03", code: "Croissance", title: "Vos clients voient des résultats", body: "Vous fidélisez, affirmez votre singularité et développez votre chiffre d'affaires." },
    ],
    cta: { label: "Prendre rendez-vous", href: "#ready" },
  },

  lineup: {
    eyebrow: "Les gammes",
    headline: "Neuf gammes. Une philosophie.",
    lead: "Pour chaque type de peau, chaque indication, chaque rituel, toujours formulé avec le même soin.",
    ranges: [
      { index: "01", name: "TAO Clean", description: "Un nettoyage respectueux de la barrière cutanée.", image: "/products/01-clean.jpg" },
      { index: "02", name: "TAO Light", description: "Pour peaux normales à mixtes.", image: "/products/02-light.jpg" },
      { index: "03", name: "TAO Dry", description: "Des soins nourrissants pour peaux sèches.", image: "/products/03-dry.jpg" },
      { index: "04", name: "TAO Glossy", description: "Éclat et hydratation profonde.", image: "/products/04-glossy.jpg" },
      { index: "05", name: "TAO More", description: "Des actifs ciblés pour des besoins particuliers.", image: "/products/05-more.jpg" },
      { index: "06", name: "TAO Man", description: "Un soin pensé pour la peau masculine.", image: "/products/06-man.jpg" },
      { index: "07", name: "TAO Body", description: "Un rituel du cou jusqu'aux pieds.", image: "/products/07-body.jpg" },
      { index: "08", name: "TAO Sun", description: "Protection et soin en un seul geste.", image: "/products/08-sun.jpg" },
      { index: "09", name: "Epiceutical®", description: "La ligne anti-âge pour les peaux exigeantes.", image: "/products/09-epiceutical.jpg" },
    ],
  },

  ready: {
    eyebrow: "Prêt ?",
    headline: "Parlons de votre partenariat.",
    sub: "Vingt minutes suffisent pour voir si TAO est la ligne qui convient à votre pratique.",
    ctas: {
      call: { label: "Prendre rendez-vous", href: "#enquiry-form" },
      write: { label: "Nous contacter", href: "#enquiry-form" },
    },
    form: {
      heading: "Demande professionnelle",
      lead: "Dites-nous quelques mots sur votre pratique. Nous répondons sous 24 heures.",
      businessName: { label: "Établissement", placeholder: "ex. Clinique du Léman" },
      contactName: { label: "Votre nom", placeholder: "Prénom et nom" },
      role: {
        label: "Votre fonction",
        placeholder: "Sélectionnez votre fonction",
        options: [
          { value: "Dermatologist", label: "Dermatologue" },
          { value: "Medspa", label: "Medspa" },
          { value: "Spa", label: "Spa" },
          { value: "Hotel", label: "Hôtel" },
          { value: "Clinic", label: "Clinique" },
          { value: "Boutique", label: "Boutique" },
          { value: "Cosmetician", label: "Esthéticien·ne" },
          { value: "Other", label: "Autre" },
        ],
      },
      email: { label: "E-mail", placeholder: "nom@etablissement.ch" },
      phone: { label: "Téléphone", placeholder: "+41 …" },
      canton: { label: "Canton", placeholder: "Sélectionnez votre canton", options: [...CANTONS] },
      message: {
        label: "Autre chose à nous dire (facultatif)",
        placeholder: "Votre carte de soins, votre clientèle, ce que vous cherchez.",
      },
      consent: {
        label: "J'accepte d'être contacté·e par Vitracosmetics au sujet d'un partenariat professionnel.",
      },
      submit: { label: "Envoyer la demande" },
      sending: "Envoi en cours…",
      replyBadge: "Réponse sous 24 heures",
      success: {
        heading: "Merci.",
        body: "Votre demande est parvenue à l'équipe Vitracosmetics. Nous répondons sous 24 heures.",
      },
      error: {
        body: "Un problème est survenu lors de l'envoi. Veuillez réessayer dans un instant ou nous écrire directement.",
      },
    },
  },

  footer: {
    emailLink: "Nous écrire",
    copyright: (year: number) => `© ${year}. Tous droits réservés.`,
  },
};
