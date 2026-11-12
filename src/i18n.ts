export const LANGS = ['ro', 'en', 'de'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ro';

export const LANG_LABELS: Record<Lang, { short: string; name: string; locale: string }> = {
  ro: { short: 'RO', name: 'Română', locale: 'ro_RO' },
  en: { short: 'EN', name: 'English', locale: 'en_US' },
  de: { short: 'DE', name: 'Deutsch', locale: 'de_DE' },
};

export type ServiceKey = 'survey' | 'planning' | 'consulting';
export type PageKey = 'home' | 'services' | 'projects' | 'about' | 'contact' | 'thanks' | 'privacy' | ServiceKey;

/** Localized URL for every page, used for links, hreflang and the language switcher.
 *  The Romanian URLs of the old site (/servicii/, /proiecte/, /despre/, /contact/) are kept as they were. */
export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { ro: '/', en: '/en/', de: '/de/' },
  services: { ro: '/servicii/', en: '/en/services/', de: '/de/leistungen/' },
  survey: {
    ro: '/servicii/masuratori-topografice/',
    en: '/en/services/topographic-surveys/',
    de: '/de/leistungen/vermessung/',
  },
  planning: {
    ro: '/servicii/planificare-coordonare/',
    en: '/en/services/planning-coordination/',
    de: '/de/leistungen/planung-koordination/',
  },
  consulting: {
    ro: '/servicii/consultanta-tehnica/',
    en: '/en/services/technical-consulting/',
    de: '/de/leistungen/technische-beratung/',
  },
  projects: { ro: '/proiecte/', en: '/en/projects/', de: '/de/projekte/' },
  about: { ro: '/despre/', en: '/en/about/', de: '/de/ueber-uns/' },
  contact: { ro: '/contact/', en: '/en/contact/', de: '/de/kontakt/' },
  thanks: { ro: '/multumim/', en: '/en/thank-you/', de: '/de/danke/' },
  privacy: { ro: '/confidentialitate/', en: '/en/privacy/', de: '/de/datenschutz/' },
};

export const SERVICE_KEYS: ServiceKey[] = ['survey', 'planning', 'consulting'];

/** Equipment names are the same in every language. */
export const EQUIPMENT = [
  { name: 'Leica FlexLine TS09plus', key: 'ts' },
  { name: 'Leica Viva GNSS GS08plus', key: 'gnss' },
  { name: 'Leica Sprinter 250M', key: 'level' },
] as const;
type EquipmentKey = (typeof EQUIPMENT)[number]['key'];

/** Places of the projects on the old site. Names are the same in every language. */
export const PROJECT_PLACES = ['Dumbrăvița', 'Săravale', 'Biled', 'Arad'];

type Service = {
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  includesTitle: string;
  includes: string[];
  faq: { q: string; a: string }[];
};

type Dict = {
  nav: {
    services: string;
    projects: string;
    equipment: string;
    about: string;
    contact: string;
    home: string;
    language: string;
    menu: string;
    theme: string;
  };
  cta: {
    quote: string;
    quoteFree: string;
    whatsapp: string;
    whatsappShort: string;
    details: string;
    allServices: string;
    allProjects: string;
    aboutUs: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    facts: { label: string; value: string }[];
    placesLabel: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
    servicesTitle: string;
    servicesLead: string;
    processTitle: string;
    process: { title: string; text: string }[];
    equipmentTitle: string;
    equipmentLead: string;
    projectsTitle: string;
    projectsLead: string;
    storyTitle: string;
  };
  equipment: Record<EquipmentKey, { kind: string; text: string }>;
  servicesPage: { metaTitle: string; metaDescription: string; title: string; lead: string };
  projects: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    items: { place: string; county: string; title: string; text: string; gallery: string; service: ServiceKey }[];
    photos: string;
    prev: string;
    next: string;
    close: string;
    galleryTitle: string;
    galleryLead: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    story: string[];
    valuesTitle: string;
    values: { title: string; text: string }[];
    companyTitle: string;
    legalName: string;
    cui: string;
    reg: string;
    caen: string;
    caenText: string;
    founded: string;
    seat: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
  };
  form: {
    name: string;
    contact: string;
    service: string;
    serviceOther: string;
    location: string;
    message: string;
    consent: string;
    consentLink: string;
    submit: string;
    subject: string;
  };
  newsletter: { label: string; placeholder: string; submit: string; subject: string };
  footer: { tagline: string; contact: string; company: string; privacy: string; rights: string; madeBy: string };
  thanks: { metaTitle: string; title: string; text: string; back: string };
  privacy: { metaTitle: string; title: string; body: string[] };
  services: Record<ServiceKey, Service>;
  faqTitle: string;
};

export const T: Record<Lang, Dict> = {
  ro: {
    nav: {
      services: 'Servicii',
      projects: 'Proiecte',
      equipment: 'Echipamente',
      about: 'Despre noi',
      contact: 'Contact',
      home: 'Acasă',
      language: 'Limba',
      menu: 'Meniu',
      theme: 'Schimbă tema (luminoasă / întunecată)',
    },
    cta: {
      quote: 'Cere ofertă',
      quoteFree: 'Cere o ofertă',
      whatsapp: 'Scrie-ne pe WhatsApp',
      whatsappShort: 'WhatsApp',
      details: 'Vezi detalii',
      allServices: 'Toate serviciile',
      allProjects: 'Toate proiectele',
      aboutUs: 'Despre noi',
    },
    home: {
      metaTitle: 'Road Consult | Măsurători topografice, planificare și consultanță tehnică pentru drumuri',
      metaDescription:
        'Road Consult, Marghita: măsurători topografice și trasări, planificarea și coordonarea lucrărilor de drumuri și consultanță tehnică. Echipamente Leica, lucrări la termen și în buget.',
      h1: 'Inginerie și consultanță tehnică pentru infrastructura rutieră',
      lead: 'Măsurători topografice, planificare și coordonare de șantier. Tratăm fiecare proiect ca unic și livrăm lucrările la termen, în bugetul stabilit.',
      facts: [
        { label: 'Înființată', value: '2017' },
        { label: 'Cod CAEN', value: '7112' },
        { label: 'Echipamente', value: 'Leica' },
      ],
      placesLabel: 'Proiecte recente în',
      valuesTitle: 'De ce Road Consult',
      values: [
        { title: 'Planificare meticuloasă', text: 'Fiecare etapă e gândită dinainte: grafic, resurse, costuri.' },
        { title: 'Realizare la termen', text: 'Urmărim zilnic execuția, ca lucrarea să se încheie când a fost promisă.' },
        { title: 'Execuție corectă', text: 'Măsurători precise și control al calității la fiecare fază.' },
        { title: 'Prețuri competitive', text: 'Ofertă clară, adaptată proiectului, fără costuri ascunse.' },
      ],
      servicesTitle: 'Ce facem',
      servicesLead: 'Soluții personalizabile pentru lucrări de drumuri, de la primul punct trasat până la recepție.',
      processTitle: 'Cum lucrăm',
      process: [
        { title: 'Analiză și ofertă', text: 'Discutăm proiectul, studiem documentația și trimitem o ofertă financiară clară.' },
        { title: 'Măsurători și planificare', text: 'Trasăm obiectivele în teren și stabilim graficul de execuție.' },
        { title: 'Coordonare și raportare', text: 'Urmărim lucrările zilnic, cu jurnal de șantier, procese-verbale și situații de lucrări.' },
      ],
      equipmentTitle: 'Echipamente',
      equipmentLead: 'Lucrăm cu instrumente Leica Geosystems, pentru măsurători rapide și precise.',
      projectsTitle: 'Proiecte recente',
      projectsLead: 'Străzi, drumuri comunale, agricole și județene în vestul țării.',
      storyTitle: 'Povestea noastră',
    },
    equipment: {
      ts: { kind: 'Stație totală', text: 'Pentru trasări și ridicări topografice de precizie pe șantier.' },
      gnss: { kind: 'Receptor GNSS', text: 'Poziționare prin satelit, pentru măsurători rapide pe suprafețe mari.' },
      level: { kind: 'Nivelă digitală', text: 'Pentru nivelment și controlul cotelor în lucrările de drumuri.' },
    },
    servicesPage: {
      metaTitle: 'Servicii: topografie, planificare și consultanță tehnică | Road Consult',
      metaDescription:
        'Măsurători topografice și trasări, planificarea și coordonarea lucrărilor de drumuri, consultanță tehnică și ofertare. Road Consult, Marghita, Bihor.',
      title: 'Serviciile noastre',
      lead: 'Trei servicii care acoperă un proiect de drumuri de la început până la final. Le poți cere separat sau împreună.',
    },
    projects: {
      metaTitle: 'Proiecte recente de drumuri | Road Consult',
      metaDescription:
        'Lucrări de drumuri la care am asigurat topografie, planificare și coordonare: Dumbrăvița, Săravale, Biled și județul Arad.',
      title: 'Proiecte recente',
      lead: 'Câteva dintre lucrările de infrastructură rutieră la care am lucrat, cu fotografii din teren.',
      photos: 'fotografii',
      prev: 'Fotografia anterioară',
      next: 'Fotografia următoare',
      close: 'Închide',
      galleryTitle: 'Din teren',
      galleryLead: 'Fotografii de pe șantierele noastre. Apasă pe o fotografie ca s-o vezi mărită.',
      items: [
        { place: 'Dumbrăvița', county: 'Timiș', title: 'Reparații și întreținere străzi', text: 'Execuția lucrărilor de reparații și întreținere a străzilor din comuna Dumbrăvița.', gallery: 'dumbravita-reparatii', service:'planning' },
        { place: 'Săravale', county: 'Timiș', title: 'Asfaltare străzi și accese', text: 'Asfaltarea străzilor și amenajarea acceselor în comuna Săravale.', gallery: 'saravale', service:'survey' },
        { place: 'Biled', county: 'Timiș', title: 'Drumuri de acces agricol', text: 'Modernizarea drumurilor de acces agricol, în cadrul proiectului „Modernizarea infrastructurii de acces agricolă din comuna Biled, județul Timiș”.', gallery: 'biled', service:'survey' },
        { place: 'Arad', county: 'Arad', title: 'Întreținere drumuri județene', text: 'Lucrări de întreținere a drumurilor județene din județul Arad.', gallery: 'arad', service:'planning' },
        { place: 'Dumbrăvița', county: 'Timiș', title: 'Modernizare străzi', text: 'Modernizarea infrastructurii rutiere: trasarea drumului și a rigolei carosabile.', gallery: 'dumbravita-modernizare', service:'planning' },
      ],
    },
    about: {
      metaTitle: 'Despre noi | Road Consult, Marghita',
      metaDescription:
        'Road Consult (MC Compas Road Consult SRL) oferă din 2017 servicii de topografie, inginerie, planificare și organizare de șantier pentru lucrări de drumuri.',
      title: 'Povestea noastră',
      story: [
        'Road Consult a fost înființată în 2017, în Marghita, județul Bihor. Oferim servicii de topografie, inginerie, planificare și organizare de șantier, în zonă și în împrejurimi.',
        'Activitatea noastră este cea de inginerie și consultanță tehnică (CAEN 7112). Tratăm fiecare proiect ca unic și căutăm soluția potrivită lui, ca lucrările să fie livrate la termen și în bugetul planificat.',
      ],
      valuesTitle: 'Ce ne definește',
      values: [
        { title: 'Profesionalism', text: 'Rigoare în măsurători, documente și comunicare.' },
        { title: 'Idei inovative', text: 'Căutăm mereu cea mai bună soluție pentru fiecare proiect.' },
        { title: 'Echipamente performante', text: 'Instrumente Leica Geosystems pentru rezultate precise.' },
        { title: 'Dedicare', text: 'Suntem alături de proiect până la recepție.' },
      ],
      companyTitle: 'Date firmă',
      legalName: 'Denumire',
      cui: 'CUI',
      reg: 'Nr. Reg. Com.',
      caen: 'Cod CAEN',
      caenText: 'Activități de inginerie și consultanță tehnică',
      founded: 'Înființată',
      seat: 'Sediu',
    },
    contact: {
      metaTitle: 'Contact și cerere ofertă | Road Consult',
      metaDescription:
        'Cere o ofertă pentru măsurători topografice, planificarea și coordonarea lucrărilor sau consultanță tehnică. Scrie-ne pe WhatsApp sau pe email.',
      title: 'Spune-ne despre proiectul tău',
      lead: 'Completează formularul sau scrie-ne pe WhatsApp. Revenim cu o ofertă cât mai repede.',
      addressLabel: 'Sediu',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
    },
    form: {
      name: 'Nume',
      contact: 'Email sau telefon',
      service: 'Serviciu',
      serviceOther: 'Altceva',
      location: 'Localitatea lucrării',
      message: 'Detalii despre proiect',
      consent: 'Sunt de acord cu prelucrarea datelor conform',
      consentLink: 'politicii de confidențialitate',
      submit: 'Trimite cererea',
      subject: 'Cerere ofertă nouă de pe roadconsult.ro',
    },
    newsletter: {
      label: 'Noutăți despre proiectele și serviciile noastre',
      placeholder: 'email@firma.ro',
      submit: 'Abonează-te',
      subject: 'Abonare newsletter roadconsult.ro',
    },
    footer: {
      tagline: 'Inginerie și consultanță tehnică pentru infrastructura rutieră.',
      contact: 'Contact',
      company: 'Firmă',
      privacy: 'Politica de confidențialitate',
      rights: 'Toate drepturile rezervate.',
      madeBy: 'Realizat de',
    },
    thanks: {
      metaTitle: 'Mulțumim! | Road Consult',
      title: 'Mulțumim, am primit mesajul tău!',
      text: 'Revenim cu un răspuns cât mai repede. Dacă e urgent, scrie-ne pe WhatsApp.',
      back: 'Înapoi la pagina principală',
    },
    privacy: {
      metaTitle: 'Politica de confidențialitate | Road Consult',
      title: 'Politica de confidențialitate',
      body: [
        'MC Compas Road Consult SRL colectează doar datele pe care ni le trimiți prin formularele de pe site (nume, email sau telefon, mesaj) și le folosește exclusiv pentru a-ți răspunde la cerere sau, dacă te abonezi, pentru a-ți trimite noutăți.',
        'Formularele sunt procesate prin serviciul Web3Forms, care ne transmite mesajul pe email. Nu vindem și nu transmitem datele tale altor terți în scop de marketing.',
        'Site-ul nu folosește cookie-uri de urmărire. Folosim un singur cookie funcțional pentru a reține limba aleasă, iar tema aleasă este salvată doar în browserul tău.',
        'Poți cere oricând accesul, corectarea sau ștergerea datelor tale scriindu-ne la contact@roadconsult.ro.',
      ],
    },
    faqTitle: 'Întrebări frecvente',
    services: {
      survey: {
        title: 'Măsurători topografice',
        short: 'Trasarea obiectivelor în teren, ridicări topografice pentru infrastructura rutieră și calculul volumelor.',
        metaTitle: 'Măsurători topografice și trasări pentru drumuri | Road Consult',
        metaDescription:
          'Trasarea obiectivelor în teren, ridicări topografice pentru infrastructura rutieră și calculul volumelor de lucrări, cu echipamente Leica.',
        headline: 'Măsurători topografice și trasări',
        intro:
          'Un drum bun începe cu măsurători corecte. Trasăm obiectivele în teren, facem ridicări topografice pentru infrastructura rutieră și calculăm volumele de lucrări, cu stație totală, receptor GNSS și nivelă digitală Leica.',
        includesTitle: 'Ce include',
        includes: [
          'Trasarea obiectivelor în teren',
          'Ridicări topografice pentru infrastructura rutieră',
          'Calculul volumelor de lucrări',
          'Nivelment și controlul cotelor',
          'Măsurători cu echipamente Leica Geosystems',
        ],
        faq: [
          { q: 'Ce echipamente folosiți?', a: 'Stația totală Leica FlexLine TS09plus, receptorul GNSS Leica Viva GS08plus și nivela digitală Leica Sprinter 250M.' },
          { q: 'În ce zonă lucrați?', a: 'Avem sediul în Marghita, județul Bihor, și lucrăm în zonă și în împrejurimi. Am avut proiecte și în județele Timiș și Arad.' },
          { q: 'Cât costă o măsurătoare?', a: 'Depinde de suprafață, de tipul lucrării și de locație. Spune-ne detaliile și îți trimitem o ofertă clară.' },
        ],
      },
      planning: {
        title: 'Planificare și coordonare',
        short: 'Urmărirea execuției, grafice de lucru, jurnal de șantier, procese-verbale și situații de lucrări.',
        metaTitle: 'Planificarea și coordonarea lucrărilor de drumuri | Road Consult',
        metaDescription:
          'Supraveghere și organizare de șantier pentru lucrări de drumuri: grafice de execuție, jurnal zilnic, rapoarte cost-beneficiu, procese-verbale și situații de lucrări.',
        headline: 'Planificare și coordonare de șantier',
        intro:
          'Lucrările se termină la timp când sunt bine planificate și urmărite zi de zi. Ne ocupăm de organizarea șantierului, de grafice și de toată documentația de execuție, ca beneficiarul să știe în orice moment unde se află proiectul.',
        includesTitle: 'Ce include',
        includes: [
          'Supravegherea și urmărirea execuției lucrărilor',
          'Organizarea de șantier',
          'Grafice de execuție',
          'Jurnal zilnic de șantier',
          'Rapoarte cost-beneficiu',
          'Procese-verbale de calitate',
          'Situații de lucrări cu fotografii, pentru plată',
        ],
        faq: [
          { q: 'Pentru cine lucrați?', a: 'Pentru beneficiari și pentru constructori care au nevoie de planificare, urmărire și documentație de execuție pentru lucrări de drumuri.' },
          { q: 'Cum aflu cum avansează lucrarea?', a: 'Prin jurnalul zilnic de șantier, procesele-verbale și situațiile de lucrări cu fotografii.' },
          { q: 'Puteți prelua și măsurătorile?', a: 'Da. Putem asigura atât partea de topografie, cât și planificarea și coordonarea, pentru un singur responsabil pe tot proiectul.' },
        ],
      },
      consulting: {
        title: 'Consultanță tehnică',
        short: 'Întocmirea ofertelor financiare și comunicarea tehnică cu beneficiarul, pe tot parcursul proiectului.',
        metaTitle: 'Consultanță tehnică pentru lucrări de drumuri | Road Consult',
        metaDescription:
          'Consultanță tehnică pentru lucrări de infrastructură rutieră: întocmirea ofertelor financiare și comunicarea tehnică cu beneficiarul.',
        headline: 'Consultanță tehnică',
        intro:
          'Te ajutăm să pregătești oferta corect și să comunici clar cu beneficiarul, de la primele discuții până la finalul lucrării. Experiența din teren se vede în fiecare document.',
        includesTitle: 'Ce include',
        includes: [
          'Întocmirea ofertelor financiare',
          'Comunicarea tehnică cu beneficiarul',
          'Asistență tehnică pe parcursul execuției',
        ],
        faq: [
          { q: 'Mă puteți ajuta cu oferta pentru o licitație?', a: 'Da. Pregătim oferta financiară pornind de la documentația tehnică a lucrării.' },
          { q: 'Lucrați și pe proiecte mici?', a: 'Da. Fiecare proiect e tratat ca unic, indiferent de dimensiune.' },
          { q: 'Cum începem?', a: 'Trimite-ne câteva detalii prin formular sau pe WhatsApp și te contactăm pentru o discuție.' },
        ],
      },
    },
  },

  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      equipment: 'Equipment',
      about: 'About',
      contact: 'Contact',
      home: 'Home',
      language: 'Language',
      menu: 'Menu',
      theme: 'Switch theme (light / dark)',
    },
    cta: {
      quote: 'Get a quote',
      quoteFree: 'Request a quote',
      whatsapp: 'Message us on WhatsApp',
      whatsappShort: 'WhatsApp',
      details: 'See details',
      allServices: 'All services',
      allProjects: 'All projects',
      aboutUs: 'About us',
    },
    home: {
      metaTitle: 'Road Consult | Topographic surveys, planning and technical consulting for roads',
      metaDescription:
        'Road Consult, Romania: topographic surveys and setting out, planning and coordination of road works, and technical consulting. Leica equipment, delivered on time and on budget.',
      h1: 'Engineering and technical consulting for road infrastructure',
      lead: 'Topographic surveys, planning and site coordination. We treat every project as unique and deliver the works on time and within the agreed budget.',
      facts: [
        { label: 'Founded', value: '2017' },
        { label: 'NACE code', value: '71.12' },
        { label: 'Equipment', value: 'Leica' },
      ],
      placesLabel: 'Recent projects in',
      valuesTitle: 'Why Road Consult',
      values: [
        { title: 'Careful planning', text: 'Every stage is thought through in advance: schedule, resources, costs.' },
        { title: 'On time', text: 'We follow the works daily so they finish when promised.' },
        { title: 'Precise execution', text: 'Accurate surveys and quality control at every stage.' },
        { title: 'Competitive prices', text: 'A clear quote, tailored to the project, with no hidden costs.' },
      ],
      servicesTitle: 'What we do',
      servicesLead: 'Tailored solutions for road works, from the first point set out to the final handover.',
      processTitle: 'How we work',
      process: [
        { title: 'Review and quote', text: 'We discuss the project, study the documentation and send a clear financial offer.' },
        { title: 'Survey and plan', text: 'We set out the works on site and agree the execution schedule.' },
        { title: 'Coordinate and report', text: 'We follow the works daily, with a site log, quality reports and progress statements.' },
      ],
      equipmentTitle: 'Equipment',
      equipmentLead: 'We work with Leica Geosystems instruments for fast, precise measurements.',
      projectsTitle: 'Recent projects',
      projectsLead: 'Streets, municipal, agricultural and county roads in western Romania.',
      storyTitle: 'Our story',
    },
    equipment: {
      ts: { kind: 'Total station', text: 'For precise setting out and topographic surveys on site.' },
      gnss: { kind: 'GNSS receiver', text: 'Satellite positioning for fast surveys over large areas.' },
      level: { kind: 'Digital level', text: 'For levelling and elevation control in road works.' },
    },
    servicesPage: {
      metaTitle: 'Services: surveying, planning and technical consulting | Road Consult',
      metaDescription:
        'Topographic surveys and setting out, planning and coordination of road works, technical consulting and tendering. Road Consult, Marghita, Romania.',
      title: 'Our services',
      lead: 'Three services that cover a road project from start to finish. Book them separately or together.',
    },
    projects: {
      metaTitle: 'Recent road projects | Road Consult',
      metaDescription:
        'Road works where we provided surveying, planning and coordination: Dumbrăvița, Săravale, Biled and Arad County, Romania.',
      title: 'Recent projects',
      lead: 'Some of the road infrastructure works we have worked on, with photos from the site.',
      photos: 'photos',
      prev: 'Previous photo',
      next: 'Next photo',
      close: 'Close',
      galleryTitle: 'From the field',
      galleryLead: 'Photos from our sites. Tap a photo to see it larger.',
      items: [
        { place: 'Dumbrăvița', county: 'Timiș', title: 'Street repairs and maintenance', text: 'Repair and maintenance works on the streets of Dumbrăvița commune.', gallery: 'dumbravita-reparatii', service:'planning' },
        { place: 'Săravale', county: 'Timiș', title: 'Road asphalting', text: 'Asphalting of streets and building of access ways in Săravale commune.', gallery: 'saravale', service:'survey' },
        { place: 'Biled', county: 'Timiș', title: 'Agricultural access roads', text: 'Modernization of agricultural access roads, as part of the project “Modernization of the agricultural access infrastructure of Biled commune, Timiș County”.', gallery: 'biled', service:'survey' },
        { place: 'Arad', county: 'Arad', title: 'County roads', text: 'Maintenance works on county roads in Arad County.', gallery: 'arad', service:'planning' },
        { place: 'Dumbrăvița', county: 'Timiș', title: 'Street modernization', text: 'Modernization of the road infrastructure: setting out the road and the drivable gutter.', gallery: 'dumbravita-modernizare', service:'planning' },
      ],
    },
    about: {
      metaTitle: 'About us | Road Consult, Marghita, Romania',
      metaDescription:
        'Road Consult (MC Compas Road Consult SRL) has provided surveying, engineering, planning and site organization for road works since 2017.',
      title: 'Our story',
      story: [
        'Road Consult was founded in 2017 in Marghita, Bihor County, Romania. We provide topographic surveying, engineering, planning and site organization, locally and in the surrounding region.',
        'Our field is engineering and related technical consulting (NACE 71.12). We treat every project as unique and look for the solution that fits it, so the works are delivered on time and within the planned budget.',
      ],
      valuesTitle: 'What defines us',
      values: [
        { title: 'Professionalism', text: 'Rigor in surveys, documents and communication.' },
        { title: 'Innovative ideas', text: 'We always look for the best solution for each project.' },
        { title: 'Reliable equipment', text: 'Leica Geosystems instruments for precise results.' },
        { title: 'Dedication', text: 'We stay with the project until handover.' },
      ],
      companyTitle: 'Company details',
      legalName: 'Legal name',
      cui: 'VAT / CUI',
      reg: 'Trade register no.',
      caen: 'NACE code',
      caenText: 'Engineering activities and related technical consultancy',
      founded: 'Founded',
      seat: 'Registered office',
    },
    contact: {
      metaTitle: 'Contact and quote request | Road Consult',
      metaDescription:
        'Request a quote for topographic surveys, planning and coordination of works or technical consulting. Message us on WhatsApp or by email.',
      title: 'Tell us about your project',
      lead: 'Fill in the form or message us on WhatsApp. We will get back to you with a quote as soon as possible.',
      addressLabel: 'Office',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
    },
    form: {
      name: 'Name',
      contact: 'Email or phone',
      service: 'Service',
      serviceOther: 'Something else',
      location: 'Project location',
      message: 'Project details',
      consent: 'I agree to the processing of my data under the',
      consentLink: 'privacy policy',
      submit: 'Send request',
      subject: 'New quote request from roadconsult.ro (EN)',
    },
    newsletter: {
      label: 'News about our projects and services',
      placeholder: 'you@company.com',
      submit: 'Subscribe',
      subject: 'Newsletter signup roadconsult.ro (EN)',
    },
    footer: {
      tagline: 'Engineering and technical consulting for road infrastructure.',
      contact: 'Contact',
      company: 'Company',
      privacy: 'Privacy policy',
      rights: 'All rights reserved.',
      madeBy: 'Made by',
    },
    thanks: {
      metaTitle: 'Thank you! | Road Consult',
      title: 'Thank you, we got your message!',
      text: "We'll get back to you as soon as possible. If it's urgent, message us on WhatsApp.",
      back: 'Back to the homepage',
    },
    privacy: {
      metaTitle: 'Privacy policy | Road Consult',
      title: 'Privacy policy',
      body: [
        'MC Compas Road Consult SRL only collects the data you send us through the forms on this site (name, email or phone, message) and uses it solely to answer your request or, if you subscribe, to send you news.',
        'Forms are processed by Web3Forms, which forwards your message to us by email. We do not sell your data or share it with third parties for marketing.',
        'This site uses no tracking cookies. We use a single functional cookie to remember your chosen language, and your chosen theme is stored only in your browser.',
        'You can ask to access, correct or delete your data at any time by writing to contact@roadconsult.ro.',
      ],
    },
    faqTitle: 'Frequently asked questions',
    services: {
      survey: {
        title: 'Topographic surveys',
        short: 'Setting out works on site, topographic surveys for road infrastructure and volume calculations.',
        metaTitle: 'Topographic surveys and setting out for roads | Road Consult',
        metaDescription:
          'Setting out works on site, topographic surveys for road infrastructure and calculation of work volumes, with Leica equipment.',
        headline: 'Topographic surveys and setting out',
        intro:
          'A good road starts with accurate measurements. We set out the works on site, carry out topographic surveys for road infrastructure and calculate work volumes, using a Leica total station, GNSS receiver and digital level.',
        includesTitle: "What's included",
        includes: [
          'Setting out works on site',
          'Topographic surveys for road infrastructure',
          'Calculation of work volumes',
          'Levelling and elevation control',
          'Measurements with Leica Geosystems equipment',
        ],
        faq: [
          { q: 'What equipment do you use?', a: 'A Leica FlexLine TS09plus total station, a Leica Viva GS08plus GNSS receiver and a Leica Sprinter 250M digital level.' },
          { q: 'Where do you work?', a: 'We are based in Marghita, Bihor County, and work locally and in the surrounding region. We have also had projects in Timiș and Arad counties.' },
          { q: 'How much does a survey cost?', a: 'It depends on the area, the type of work and the location. Send us the details and we will send you a clear quote.' },
        ],
      },
      planning: {
        title: 'Planning and coordination',
        short: 'Supervising the works, schedules, site log, quality reports and progress statements.',
        metaTitle: 'Planning and coordination of road works | Road Consult',
        metaDescription:
          'Site supervision and organization for road works: execution schedules, daily site log, cost-benefit reports, quality reports and progress statements.',
        headline: 'Site planning and coordination',
        intro:
          'Works finish on time when they are well planned and followed day by day. We handle site organization, schedules and all the execution paperwork, so the client always knows where the project stands.',
        includesTitle: "What's included",
        includes: [
          'Supervising and following the works',
          'Site organization',
          'Execution schedules',
          'Daily site log',
          'Cost-benefit reports',
          'Quality reports',
          'Progress statements with photos, for payment',
        ],
        faq: [
          { q: 'Who do you work for?', a: 'For clients and contractors who need planning, supervision and execution paperwork for road works.' },
          { q: 'How do I know how the works are progressing?', a: 'Through the daily site log, the quality reports and progress statements with photos.' },
          { q: 'Can you also do the surveying?', a: 'Yes. We can provide both the surveying and the planning and coordination, so one team is responsible for the whole project.' },
        ],
      },
      consulting: {
        title: 'Technical consulting',
        short: 'Preparing financial offers and technical communication with the client, throughout the project.',
        metaTitle: 'Technical consulting for road works | Road Consult',
        metaDescription:
          'Technical consulting for road infrastructure works: preparing financial offers and technical communication with the client.',
        headline: 'Technical consulting',
        intro:
          'We help you prepare the offer correctly and communicate clearly with the client, from the first conversations to the end of the works. Our field experience shows in every document.',
        includesTitle: "What's included",
        includes: [
          'Preparing financial offers',
          'Technical communication with the client',
          'Technical assistance during execution',
        ],
        faq: [
          { q: 'Can you help with a tender offer?', a: 'Yes. We prepare the financial offer based on the technical documentation of the works.' },
          { q: 'Do you work on small projects?', a: 'Yes. Every project is treated as unique, whatever its size.' },
          { q: 'How do we start?', a: 'Send us a few details through the form or on WhatsApp and we will contact you for a conversation.' },
        ],
      },
    },
  },

  de: {
    nav: {
      services: 'Leistungen',
      projects: 'Projekte',
      equipment: 'Ausrüstung',
      about: 'Über uns',
      contact: 'Kontakt',
      home: 'Start',
      language: 'Sprache',
      menu: 'Menü',
      theme: 'Design wechseln (hell / dunkel)',
    },
    cta: {
      quote: 'Angebot anfragen',
      quoteFree: 'Angebot anfragen',
      whatsapp: 'Schreiben Sie uns auf WhatsApp',
      whatsappShort: 'WhatsApp',
      details: 'Details ansehen',
      allServices: 'Alle Leistungen',
      allProjects: 'Alle Projekte',
      aboutUs: 'Über uns',
    },
    home: {
      metaTitle: 'Road Consult | Vermessung, Planung und technische Beratung im Straßenbau',
      metaDescription:
        'Road Consult, Rumänien: Vermessung und Absteckung, Planung und Koordination von Straßenbauarbeiten sowie technische Beratung. Leica-Ausrüstung, termin- und budgetgerecht.',
      h1: 'Ingenieurleistungen und technische Beratung für den Straßenbau',
      lead: 'Vermessung, Planung und Baustellenkoordination. Wir behandeln jedes Projekt als einzigartig und liefern termingerecht und im vereinbarten Budget.',
      facts: [
        { label: 'Gegründet', value: '2017' },
        { label: 'NACE-Code', value: '71.12' },
        { label: 'Ausrüstung', value: 'Leica' },
      ],
      placesLabel: 'Aktuelle Projekte in',
      valuesTitle: 'Warum Road Consult',
      values: [
        { title: 'Sorgfältige Planung', text: 'Jede Phase wird vorausgedacht: Zeitplan, Ressourcen, Kosten.' },
        { title: 'Termintreue', text: 'Wir begleiten die Ausführung täglich, damit sie pünktlich fertig wird.' },
        { title: 'Präzise Ausführung', text: 'Genaue Vermessung und Qualitätskontrolle in jeder Phase.' },
        { title: 'Faire Preise', text: 'Ein klares Angebot, passend zum Projekt, ohne versteckte Kosten.' },
      ],
      servicesTitle: 'Was wir tun',
      servicesLead: 'Maßgeschneiderte Lösungen für den Straßenbau, vom ersten abgesteckten Punkt bis zur Abnahme.',
      processTitle: 'So arbeiten wir',
      process: [
        { title: 'Prüfung und Angebot', text: 'Wir besprechen das Projekt, prüfen die Unterlagen und senden ein klares Angebot.' },
        { title: 'Vermessung und Planung', text: 'Wir stecken die Bauwerke vor Ort ab und legen den Bauzeitenplan fest.' },
        { title: 'Koordination und Berichte', text: 'Wir begleiten die Arbeiten täglich, mit Bautagebuch, Qualitätsprotokollen und Aufmaßen.' },
      ],
      equipmentTitle: 'Ausrüstung',
      equipmentLead: 'Wir arbeiten mit Instrumenten von Leica Geosystems für schnelle, präzise Messungen.',
      projectsTitle: 'Aktuelle Projekte',
      projectsLead: 'Ortsstraßen, Gemeinde-, Wirtschafts- und Kreisstraßen im Westen Rumäniens.',
      storyTitle: 'Unsere Geschichte',
    },
    equipment: {
      ts: { kind: 'Totalstation', text: 'Für präzise Absteckungen und Vermessungen auf der Baustelle.' },
      gnss: { kind: 'GNSS-Empfänger', text: 'Satellitenpositionierung für schnelle Messungen auf großen Flächen.' },
      level: { kind: 'Digitalnivellier', text: 'Für Nivellements und Höhenkontrolle im Straßenbau.' },
    },
    servicesPage: {
      metaTitle: 'Leistungen: Vermessung, Planung und technische Beratung | Road Consult',
      metaDescription:
        'Vermessung und Absteckung, Planung und Koordination von Straßenbauarbeiten, technische Beratung und Angebotserstellung. Road Consult, Marghita, Rumänien.',
      title: 'Unsere Leistungen',
      lead: 'Drei Leistungen, die ein Straßenbauprojekt von Anfang bis Ende abdecken. Einzeln oder zusammen buchbar.',
    },
    projects: {
      metaTitle: 'Aktuelle Straßenbauprojekte | Road Consult',
      metaDescription:
        'Straßenbauarbeiten, bei denen wir Vermessung, Planung und Koordination übernommen haben: Dumbrăvița, Săravale, Biled und Kreis Arad, Rumänien.',
      title: 'Aktuelle Projekte',
      lead: 'Einige der Straßenbauprojekte, an denen wir gearbeitet haben, mit Fotos von der Baustelle.',
      photos: 'Fotos',
      prev: 'Vorheriges Foto',
      next: 'Nächstes Foto',
      close: 'Schließen',
      galleryTitle: 'Von der Baustelle',
      galleryLead: 'Fotos von unseren Baustellen. Tippen Sie auf ein Foto, um es zu vergrößern.',
      items: [
        { place: 'Dumbrăvița', county: 'Timiș', title: 'Straßenreparatur und -instandhaltung', text: 'Reparatur- und Instandhaltungsarbeiten an den Straßen der Gemeinde Dumbrăvița.', gallery: 'dumbravita-reparatii', service:'planning' },
        { place: 'Săravale', county: 'Timiș', title: 'Asphaltierung von Straßen', text: 'Asphaltierung von Straßen und Bau von Zufahrten in der Gemeinde Săravale.', gallery: 'saravale', service:'survey' },
        { place: 'Biled', county: 'Timiș', title: 'Landwirtschaftliche Wege', text: 'Modernisierung landwirtschaftlicher Zufahrtswege im Rahmen des Projekts „Modernisierung der landwirtschaftlichen Zufahrtsinfrastruktur der Gemeinde Biled, Kreis Timiș“.', gallery: 'biled', service:'survey' },
        { place: 'Arad', county: 'Arad', title: 'Kreisstraßen', text: 'Instandhaltungsarbeiten an Kreisstraßen im Kreis Arad.', gallery: 'arad', service:'planning' },
        { place: 'Dumbrăvița', county: 'Timiș', title: 'Straßenmodernisierung', text: 'Modernisierung der Straßeninfrastruktur: Absteckung der Fahrbahn und der befahrbaren Rinne.', gallery: 'dumbravita-modernizare', service:'planning' },
      ],
    },
    about: {
      metaTitle: 'Über uns | Road Consult, Marghita, Rumänien',
      metaDescription:
        'Road Consult (MC Compas Road Consult SRL) bietet seit 2017 Vermessung, Ingenieurleistungen, Planung und Baustellenorganisation für den Straßenbau.',
      title: 'Unsere Geschichte',
      story: [
        'Road Consult wurde 2017 in Marghita, Kreis Bihor, Rumänien, gegründet. Wir bieten Vermessung, Ingenieurleistungen, Planung und Baustellenorganisation, vor Ort und in der Region.',
        'Unser Tätigkeitsbereich sind Ingenieurbüros und technische Beratung (NACE 71.12). Wir behandeln jedes Projekt als einzigartig und suchen die passende Lösung, damit die Arbeiten termingerecht und im geplanten Budget fertig werden.',
      ],
      valuesTitle: 'Was uns ausmacht',
      values: [
        { title: 'Professionalität', text: 'Sorgfalt bei Messungen, Unterlagen und Kommunikation.' },
        { title: 'Innovative Ideen', text: 'Wir suchen immer die beste Lösung für jedes Projekt.' },
        { title: 'Leistungsstarke Ausrüstung', text: 'Instrumente von Leica Geosystems für präzise Ergebnisse.' },
        { title: 'Engagement', text: 'Wir begleiten das Projekt bis zur Abnahme.' },
      ],
      companyTitle: 'Firmendaten',
      legalName: 'Firmenname',
      cui: 'Steuernummer (CUI)',
      reg: 'Handelsregister-Nr.',
      caen: 'NACE-Code',
      caenText: 'Ingenieurbüros und technische Beratung',
      founded: 'Gegründet',
      seat: 'Firmensitz',
    },
    contact: {
      metaTitle: 'Kontakt und Angebotsanfrage | Road Consult',
      metaDescription:
        'Fragen Sie ein Angebot für Vermessung, Planung und Koordination von Bauarbeiten oder technische Beratung an. Per WhatsApp oder E-Mail.',
      title: 'Erzählen Sie uns von Ihrem Projekt',
      lead: 'Füllen Sie das Formular aus oder schreiben Sie uns auf WhatsApp. Wir melden uns schnellstmöglich mit einem Angebot.',
      addressLabel: 'Firmensitz',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Mail',
    },
    form: {
      name: 'Name',
      contact: 'E-Mail oder Telefon',
      service: 'Leistung',
      serviceOther: 'Etwas anderes',
      location: 'Ort des Projekts',
      message: 'Details zum Projekt',
      consent: 'Ich stimme der Verarbeitung meiner Daten gemäß der',
      consentLink: 'Datenschutzerklärung zu',
      submit: 'Anfrage senden',
      subject: 'Neue Angebotsanfrage von roadconsult.ro (DE)',
    },
    newsletter: {
      label: 'Neuigkeiten zu unseren Projekten und Leistungen',
      placeholder: 'name@firma.de',
      submit: 'Abonnieren',
      subject: 'Newsletter-Anmeldung roadconsult.ro (DE)',
    },
    footer: {
      tagline: 'Ingenieurleistungen und technische Beratung für den Straßenbau.',
      contact: 'Kontakt',
      company: 'Firma',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
      madeBy: 'Umsetzung',
    },
    thanks: {
      metaTitle: 'Vielen Dank! | Road Consult',
      title: 'Vielen Dank, wir haben Ihre Nachricht erhalten!',
      text: 'Wir melden uns so schnell wie möglich. Wenn es eilt, schreiben Sie uns auf WhatsApp.',
      back: 'Zurück zur Startseite',
    },
    privacy: {
      metaTitle: 'Datenschutzerklärung | Road Consult',
      title: 'Datenschutzerklärung',
      body: [
        'MC Compas Road Consult SRL erhebt nur die Daten, die Sie uns über die Formulare dieser Website senden (Name, E-Mail oder Telefon, Nachricht), und verwendet sie ausschließlich zur Beantwortung Ihrer Anfrage oder, wenn Sie sich anmelden, für Neuigkeiten.',
        'Formulare werden über Web3Forms verarbeitet, das uns Ihre Nachricht per E-Mail weiterleitet. Wir verkaufen Ihre Daten nicht und geben sie nicht zu Werbezwecken an Dritte weiter.',
        'Diese Website verwendet keine Tracking-Cookies. Ein einziges funktionales Cookie speichert Ihre Sprachwahl, und Ihr gewähltes Design wird nur in Ihrem Browser gespeichert.',
        'Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen: contact@roadconsult.ro.',
      ],
    },
    faqTitle: 'Häufige Fragen',
    services: {
      survey: {
        title: 'Vermessung',
        short: 'Absteckung vor Ort, Vermessung für Straßeninfrastruktur und Mengenberechnung.',
        metaTitle: 'Vermessung und Absteckung im Straßenbau | Road Consult',
        metaDescription:
          'Absteckung vor Ort, topografische Vermessung für Straßeninfrastruktur und Berechnung von Massen und Mengen, mit Leica-Ausrüstung.',
        headline: 'Vermessung und Absteckung',
        intro:
          'Eine gute Straße beginnt mit genauen Messungen. Wir stecken die Bauwerke vor Ort ab, vermessen Straßeninfrastruktur und berechnen Massen und Mengen, mit Leica-Totalstation, GNSS-Empfänger und Digitalnivellier.',
        includesTitle: 'Das ist enthalten',
        includes: [
          'Absteckung der Bauwerke vor Ort',
          'Topografische Vermessung für Straßeninfrastruktur',
          'Berechnung von Massen und Mengen',
          'Nivellement und Höhenkontrolle',
          'Messungen mit Leica-Geosystems-Ausrüstung',
        ],
        faq: [
          { q: 'Welche Ausrüstung verwenden Sie?', a: 'Eine Totalstation Leica FlexLine TS09plus, einen GNSS-Empfänger Leica Viva GS08plus und ein Digitalnivellier Leica Sprinter 250M.' },
          { q: 'Wo sind Sie tätig?', a: 'Unser Sitz ist in Marghita, Kreis Bihor. Wir arbeiten vor Ort und in der Region und hatten auch Projekte in den Kreisen Timiș und Arad.' },
          { q: 'Was kostet eine Vermessung?', a: 'Das hängt von Fläche, Art der Arbeit und Ort ab. Senden Sie uns die Details und Sie erhalten ein klares Angebot.' },
        ],
      },
      planning: {
        title: 'Planung und Koordination',
        short: 'Bauüberwachung, Zeitpläne, Bautagebuch, Qualitätsprotokolle und Aufmaße.',
        metaTitle: 'Planung und Koordination von Straßenbauarbeiten | Road Consult',
        metaDescription:
          'Bauüberwachung und Baustellenorganisation im Straßenbau: Bauzeitenpläne, Bautagebuch, Kosten-Nutzen-Berichte, Qualitätsprotokolle und Aufmaße.',
        headline: 'Baustellenplanung und Koordination',
        intro:
          'Bauarbeiten werden pünktlich fertig, wenn sie gut geplant und täglich begleitet werden. Wir übernehmen Baustellenorganisation, Zeitpläne und die gesamte Ausführungsdokumentation, damit der Bauherr jederzeit weiß, wo das Projekt steht.',
        includesTitle: 'Das ist enthalten',
        includes: [
          'Überwachung und Begleitung der Bauausführung',
          'Baustellenorganisation',
          'Bauzeitenpläne',
          'Tägliches Bautagebuch',
          'Kosten-Nutzen-Berichte',
          'Qualitätsprotokolle',
          'Aufmaße mit Fotos, für die Abrechnung',
        ],
        faq: [
          { q: 'Für wen arbeiten Sie?', a: 'Für Bauherren und Bauunternehmen, die Planung, Überwachung und Ausführungsdokumentation für Straßenbauarbeiten brauchen.' },
          { q: 'Wie erfahre ich den Baufortschritt?', a: 'Über das tägliche Bautagebuch, die Qualitätsprotokolle und Aufmaße mit Fotos.' },
          { q: 'Übernehmen Sie auch die Vermessung?', a: 'Ja. Wir bieten Vermessung sowie Planung und Koordination, damit ein Team für das ganze Projekt verantwortlich ist.' },
        ],
      },
      consulting: {
        title: 'Technische Beratung',
        short: 'Erstellung von Angeboten und technische Kommunikation mit dem Bauherrn, während des gesamten Projekts.',
        metaTitle: 'Technische Beratung für Straßenbauarbeiten | Road Consult',
        metaDescription:
          'Technische Beratung für Straßeninfrastruktur: Erstellung von Angeboten und technische Kommunikation mit dem Bauherrn.',
        headline: 'Technische Beratung',
        intro:
          'Wir helfen Ihnen, das Angebot richtig vorzubereiten und klar mit dem Bauherrn zu kommunizieren, von den ersten Gesprächen bis zum Ende der Arbeiten. Unsere Praxiserfahrung steckt in jedem Dokument.',
        includesTitle: 'Das ist enthalten',
        includes: [
          'Erstellung von Angeboten',
          'Technische Kommunikation mit dem Bauherrn',
          'Technische Unterstützung während der Ausführung',
        ],
        faq: [
          { q: 'Helfen Sie bei einem Ausschreibungsangebot?', a: 'Ja. Wir erstellen das Angebot auf Grundlage der technischen Unterlagen.' },
          { q: 'Arbeiten Sie auch an kleinen Projekten?', a: 'Ja. Jedes Projekt wird als einzigartig behandelt, unabhängig von seiner Größe.' },
          { q: 'Wie fangen wir an?', a: 'Senden Sie uns ein paar Details über das Formular oder per WhatsApp, und wir melden uns für ein Gespräch.' },
        ],
      },
    },
  },
};
