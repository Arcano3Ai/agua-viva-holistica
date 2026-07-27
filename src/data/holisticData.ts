export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  duration: string;
  benefits: string[];
  image: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  spotsLeft: number;
  location: string;
  image: string;
  price: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Instalaciones' | 'Ceremonias' | 'Terapias';
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "terapia-cuarzos",
    title: "Terapia con cuarzos",
    shortDescription: "Canalización vibracional con cristales sagrados para alinear tus centros energéticos.",
    fullDescription: "La terapia con cuarzos aprovecha las frecuencias electromagnéticas y las propiedades piezoeléctricas de los cristales naturales para desbloquear los chakras, restaurar el campo electromagnético y facilitar estados profundos de paz física y mental.",
    iconName: "Gem",
    duration: "60 min",
    benefits: ["Alineación de Chakras", "Alivio del estrés profundo", "Equilibrio electro-vibracional"],
    image: "/images/service-cuarzos.png"
  },
  {
    id: "armonizacion-pendulo",
    title: "Armonización y consulta con péndulo",
    shortDescription: "Radiestesia terapéutica para diagnosticar y restaurar el flujo vital del organismo.",
    fullDescription: "A través de la radiestesia holística y la kinesiología sutil, diagnosticamos bloqueos en el aura y los centros vitales. Permite tomar decisiones conscientes y devolver el flujo natural de energía pura al cuerpo.",
    iconName: "Compass",
    duration: "50 min",
    benefits: ["Claridad mental y emocional", "Diagnóstico de bloqueos energéticos", "Sensación de ligereza inmediata"],
    image: "/images/service-pendulo.png"
  },
  {
    id: "limpiezas-energeticas",
    title: "Limpiezas energéticas",
    shortDescription: "Rituales de sahumado con hierbas sagradas, resinas naturales y frecuencias sonoras.",
    fullDescription: "Purificación profunda de tu campo áurico y espacios. Empleamos copal blanco, salvia sagrada, palosanto y cuencos tibetanos para disipar cargas pesadas, protegiendo tu paz interior.",
    iconName: "Sparkles",
    duration: "75 min",
    benefits: ["Purificación de aura y ambientes", "Protección contra energías densas", "Renovación espiritual"],
    image: "/images/service-limpieza.png"
  },
  {
    id: "tarot-terapeutico",
    title: "Tarot terapéutico",
    shortDescription: "Una herramienta de autoconocimiento y sincronía simbólica para iluminar tu camino.",
    fullDescription: "Lejos de la adivinación dogmática, el Tarot Terapéutico funciona como un espejo del inconsciente (siguiendo la psicología analítica junguiana). Te ayuda a comprender patrones, soltar amarres del pasado y tomar decisiones alineadas con tu ser supremo.",
    iconName: "BookOpenCheck",
    duration: "60 min",
    benefits: ["Autoconocimiento elevado", "Desbloqueo de decisiones estancadas", "Integración de sombra y luz"],
    image: "/images/service-tarot.png"
  },
  {
    id: "ceremonias-cacao",
    title: "Ceremonias de cacao",
    shortDescription: "Encuentro sagrado con la medicina ancestral del corazón para sanar y conectar.",
    fullDescription: "Un viaje amoroso guíado por la medicina del Cacao 100% puro y ceremonial. Combina cantos de medicina, respiración consciente, baño de sonido y aperturas emocionales para volver al estado natural del amor propio.",
    iconName: "HeartHandshake",
    duration: "120 min",
    benefits: ["Apertura del chakra corazón", "Liberación emocional suave", "Conexión profunda con la comunidad"],
    image: "/images/cacao.png"
  },
  {
    id: "circulos-mujeres",
    title: "Círculos de mujeres",
    shortDescription: "Espacio contenedor de sororidad, sanación del linaje femenino y nutrición del alma.",
    fullDescription: "Espacio seguro y amoroso donde las mujeres comparten, honran la ciclicidad lunar y sanan la herida ancestral. A través de la palabra sagrada, la danza y la meditación guiada, reconectamos con la diosa interior.",
    iconName: "Users",
    duration: "90 min",
    benefits: ["Sanación del linaje femenino", "Red de contención amorosa", "Honra de la sagrada ciclicidad"],
    image: "/images/service-circulo.png"
  },
  {
    id: "elaboracion-mandalas",
    title: "Elaboración de mandalas",
    shortDescription: "Arte meditativo para enfocar la mente, expresar emociones y centrar la atención.",
    fullDescription: "Taller vivencial de creación geométrica donde canalizas tus estados de ánimo y propósitos en mandalas de lienzo y pigmentos naturales. Integra la atención plena y el arte curativo.",
    iconName: "Palette",
    duration: "90 min",
    benefits: ["Desarrollo de la atención plena", "Expresión creativa liberadora", "Reducción de la ansiedad"],
    image: "/images/about.png"
  },
  {
    id: "ojos-de-dios",
    title: "Ojos de Dios",
    shortDescription: "Tejido ceremonial huichol (Sikuli) para la protección energética y la contemplación.",
    fullDescription: "Aprende el arte sagrado del tejido ancestral de hilos de colores sobre madera en forma de cruz. Cada hilo entrelazado actúa como una oración teñida de intención, amuleto de protección y presencia plena.",
    iconName: "Flower2",
    duration: "90 min",
    benefits: ["Meditación activa a través del hilo", "Creación de amuleto personal", "Paz interior sostenida"],
    image: "/images/quartz.png"
  },
  {
    id: "meditacion",
    title: "Meditación",
    shortDescription: "Sesiones guiadas de Mindfulness, Pranayama y viajes sonoros con cuencos de cuarzo.",
    fullDescription: "Prácticas de quietud mental y presencia consciente. Guiamos técnicas de respiración (Pranayama) e inmersion en frecuencias solfeggio para reducir la presión sanguínea y cultivar serenidad permanente.",
    iconName: "Sun",
    duration: "45 min",
    benefits: ["Reducción de cortisol (estrés)", "Mayor enfoque y concentración", "Estado de paz extendido"],
    image: "/images/meditation.png"
  },
  {
    id: "reiki",
    title: "Reiki Usui Tradicional",
    shortDescription: "Imposición de manos para canalizar la Energía Vital Universal hacia donde más lo necesitas.",
    fullDescription: "El Reiki Usui restablece la armonía holística en los planos físico, mental, emocional y espiritual. El terapeuta sirve como canal pasivo de luz para activar los mecanismos naturales de autocuración de tu cuerpo.",
    iconName: "HandHeart",
    duration: "60 min",
    benefits: ["Aceleración de procesos curativos", "Relajación física profunda", "Revitalización del campo áurico"],
    image: "/images/service-cuarzos.png"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "paz-interior",
    title: "Paz interior",
    description: "Cultiva una serenidad inquebrantable ante los desafíos cotidianos.",
    iconName: "Feather"
  },
  {
    id: "equilibrio-energetico",
    title: "Equilibrio energético",
    description: "Restaura la vitalidad y fluidez constante en todo tu ser.",
    iconName: "Zap"
  },
  {
    id: "conexion-espiritual",
    title: "Conexión espiritual",
    description: "Reconecta con tu esencia más profunda y la naturaleza.",
    iconName: "Infinity"
  },
  {
    id: "autoconocimiento",
    title: "Autoconocimiento",
    description: "Comprende tus ciclos, emociones y patrones de crecimiento.",
    iconName: "Eye"
  },
  {
    id: "bienestar-emocional",
    title: "Bienestar emocional",
    description: "Libera bloqueos antiguos y abraza la tranquilidad mental.",
    iconName: "Heart"
  },
  {
    id: "crecimiento-personal",
    title: "Crecimiento personal",
    description: "Despliega tu máximo potencial iluminando tu propósito de vida.",
    iconName: "Sprout"
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "evento-cacao",
    title: "Ceremonia de Cacao y Viaje de Sonido",
    date: "15 de Agosto, 2026",
    time: "18:00 - 20:30 hrs",
    description: "Un espacio sagrado para abrir el corazón con medicina de cacao puro de Oaxaca y baños con cuencos de cristal.",
    spotsLeft: 6,
    location: "Sala Principal Agua Viva",
    image: "/images/cacao.png",
    price: "$450 MXN"
  },
  {
    id: "evento-utero",
    title: "Rito del Útero (Sanación Linaje)",
    date: "22 de Agosto, 2026",
    time: "17:00 - 19:30 hrs",
    description: "Transmisión del 13° Rito de Munay-Ki para liberar dolores ancestrales y florecer la fuerza femenina sagrada.",
    spotsLeft: 4,
    location: "Jardín Holístico",
    image: "/images/service-circulo.png",
    price: "$500 MXN"
  },
  {
    id: "evento-luna-llena",
    title: "Círculo de Luna Llena en Acuario",
    date: "29 de Agosto, 2026",
    time: "19:00 - 21:00 hrs",
    description: "Medición guiada, meditación de intención con velas y sahumado de cristales para manifestar colectivamente.",
    spotsLeft: 8,
    location: "Terraza Zen",
    image: "/images/service-limpieza.png",
    price: "$350 MXN"
  },
  {
    id: "evento-meditacion",
    title: "Meditación Guiada & Baño de Gong",
    date: "05 de Septiembre, 2026",
    time: "10:00 - 11:30 hrs",
    description: "Experiencia inmersiva en ondas Alfa y Theta para reprogramar el sistema nervioso y recalibrar el cuerpo.",
    spotsLeft: 5,
    location: "Sala Principal Agua Viva",
    image: "/images/meditation.png",
    price: "$380 MXN"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonio-1",
    name: "Valeria M. Sotomayor",
    role: "Practicante de Yoga y Diseñadora",
    comment: "Agua Viva Holística cambió por completo mi perspectiva sobre el cuidado personal. Desde que entré por la puerta sentí una paz tan pura y sutil que mi ansiedad desapareció inmediatamente. La terapia con cuarzos fue reveladora.",
    rating: 5,
    image: "/images/service-circulo.png"
  },
  {
    id: "testimonio-2",
    name: "Dr. Rodrigo Alarcón",
    role: "Médico Cirujano",
    comment: "Como profesional de la salud física, buscaba un lugar serio y profesional para equilibrar mi estrés emocional. La consulta con péndulo y las meditaciones guiadas son excepcionales. Recomiendo este espacio a cualquier persona.",
    rating: 5,
    image: "/images/service-pendulo.png"
  },
  {
    id: "testimonio-3",
    name: "Camila Fernández",
    role: "Empresaria y Emprendedora",
    comment: "La Ceremonia de Cacao fue una de las experiencias más sanadoras de mi vida. El amor, la elegancia y el respeto con el que cuidan cada detalle en Agua Viva te hace sentir en un refugio divino.",
    rating: 5,
    image: "/images/cacao.png"
  },
  {
    id: "testimonio-4",
    name: "Lorena Gutiérrez",
    role: "Arquitecta de Interiores",
    comment: "El diseño del centro, la iluminación cálida y la calidad de los terapeutas crean una atmósfera digna de un resort holístico de nivel internacional. Cada sesión de Reiki me recarga de energía pura.",
    rating: 5,
    image: "/images/service-cuarzos.png"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Santuario de Cristales y Terapias", category: "Instalaciones", image: "/images/service-cuarzos.png" },
  { id: "g2", title: "Ceremonia Sagrada de Cacao", category: "Ceremonias", image: "/images/cacao.png" },
  { id: "g3", title: "Jardín Zen y Espacio de Meditación", category: "Instalaciones", image: "/images/real_photo.jpg" },
  { id: "g4", title: "Sesión Guiada de Mindfulness", category: "Terapias", image: "/images/meditation.png" },
  { id: "g5", title: "Armonización con Cuencos y Cristales", category: "Terapias", image: "/images/service-pendulo.png" },
  { id: "g6", title: "Círculo de Mujeres y Ritual de Luna", category: "Ceremonias", image: "/images/service-circulo.png" }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Necesito experiencia previa para asistir a los servicios o ceremonias?",
    answer: "No, en absoluto. Todos nuestros servicios, mediataciones y ceremonias están diseñados para recibir tanto a personas que inician su camino holístico como a practicantes avanzados. Nuestros terapeutas te guiarán amorosamente en cada paso."
  },
  {
    id: "faq-2",
    question: "¿Cómo debo prepararme para mi primera cita o terapia?",
    answer: "Te recomendamos asistir con ropa cómoda en tonos claros o neutros, evitar comidas muy pesadas u horas previas a tu sesión y llegar 10 minutos antes para relajarte con una infusión herbal de cortesía."
  },
  {
    id: "faq-3",
    question: "¿Cuál es la diferencia entre el Tarot Terapéutico y el predictivo?",
    answer: "El Tarot Terapéutico no busca predecir un futuro rígido, sino explorar tu estado presente, tus bloqueos inconscientes y las oportunidades de sanación activa para que tomes decisiones conscientes y libres."
  },
  {
    id: "faq-4",
    question: "¿Las ceremonias de cacao tienen alguna contraindicación médica?",
    answer: "Utilizamos Cacao 100% orgánico de grado ceremonial. Si estás embarazada (primer trimestre), tomas antidepresivos fuertes o padeces afecciones cardíacas severas, simplemente adaptamos la dosis para que disfrutes la experiencia con total seguridad."
  },
  {
    id: "faq-5",
    question: "¿Puedo reservar eventos privados para grupos o empresas?",
    answer: "Sí, diseñamos vivencias personalizadas para grupos privados, círculos de cumpleaños, eventos empresariales de bienestar y retiros urbanos. Contáctanos por WhatsApp para enviarte una propuesta a medida."
  }
];

export interface GuideInfo {
  name: string;
  title: string;
  role: string;
  story: string;
  quote: string;
  imageMeditation: string;
  imageStaff: string;
  specialties: string[];
}

export const ADRIAN_GUIDE: GuideInfo = {
  name: "Adrián",
  title: "El Portador de la Lámpara",
  role: "Fundador & Guía Espiritual Principal",
  quote: "La luz no se busca fuera; se enciende al aquietar la mente y escuchar el palpitar del fuego sagrado.",
  story: "Con más de 15 años dedicado al estudio de la meditación profunda, las filosofías ancestrales y la sanación energética, Adrián fundó Agua Viva Holística en el corazón de Apodaca como un refugio de presencia y paz. Conocido amorosamente como 'El Portador de la Lámpara', sostiene la luz ceremonial para acompañar a las personas a través de la oscuridad del estrés y los bloqueos emocionales, ayudándoles a reconectar con la claridad interior y la serenidad del alma.",
  imageMeditation: "/images/adrian_meditation.jpg",
  imageStaff: "/images/adrian_staff.jpg",
  specialties: [
    "Sanación con Fuego Sagrado & Sahumado",
    "Meditación Profunda & Pranayama",
    "Radiestesia & Armonización Vital",
    "Acompañamiento Espiritual Consciente"
  ]
};
