export interface Trip {
  destination: string,
  image: string
  takeoff: string
  price: number
}

export interface Opinion {
  image: string
  name: `${string} ${string}`
  country: string
  province: string
  opinion: string
}

export interface Question { 
  question: string, 
  response: string
}

export interface Reason {
  title: string
  description: string
  icon: "plane" | "money" | "group"
}

export const trips: Trip[] = [
  {
    destination: "Madrid",
    image: "/assets/Madrid.jpg",
    takeoff: "Buenos Aires",
    price: 1300
  },
  {
    destination: "Miami",
    image: "/assets/Miami.jpg",
    takeoff: "Buenos Aires",
    price: 760
  },
  {
    destination: "Río de Janeiro",
    image: "/assets/RioDeJaneiro.jpg",
    takeoff: "Buenos Aires",
    price: 250
  },
  {
    destination: "Cancún",
    image: "/assets/Cancun.jpg",
    takeoff: "Córdoba",
    price: 750
  },
  {
    destination: "Barcelona",
    image: "/assets/Barcelona.jpg",
    takeoff: "Buenos Aires",
    price: 1250
  },
  {
    destination: "París",
    image: "/assets/Paris.jpg",
    takeoff: "Buenos Aires",
    price: 1340
  }
]

export const opinions: Opinion[] = [
  {
    image: "/assets/Person1.jpg",
    name: "María Fernández",
    country: "Argentina",
    province: "Buenos Aires",
    opinion: "Mi familia y yo disfrutamos de una experiencia inolvidable gracias a RutaSimple. La atención al detalle y la personalización del viaje superaron nuestras expectativas. Definitivamente volveremos a planificar nuestras vacaciones con ellos."
  },
  {
    image: "/assets/Person2.jpg",
    name: "José González",
    country: "Argentina",
    province: "Buenos Aires",
    opinion: "Como viajero solo, siempre busco seguridad y comodidad. RutaSimple me proporcionó ambas, junto con una aventura emocionante. Su equipo de soporte estuvo allí para mí en cada paso del camino. Recomendado al 100%."
  },
  {
    image: "/assets/Person3.jpg",
    name: "Juan Pérez",
    country: "Argentina",
    province: "Córdoba",
    opinion: "RutaSimple transformó nuestra luna de miel en un sueño hecho realidad. Desde hoteles románticos hasta cenas a la luz de las estrellas, cada momento fue mágico. Gracias por hacer que nuestro viaje especial fuera tan perfecto."
  }
]


export const questions: Question[] = [
  {
    question: "¿Cuándo hay descuentos en RutaSimple?",
    response: "En RutaSimple, los descuentos suelen estar disponibles durante eventos especiales, festividades y temporadas bajas para maximizar tus ahorros. Además, ofrecemos promociones exclusivas para viajes de último minuto y paquetes especiales durante todo el año. Mantén un ojo en nuestras actualizaciones para aprovechar estas oportunidades y disfrutar de tus viajes con la mejor calidad y precio."
  },
  {
    question: "¿Cómo me entero de los descuentos de RutaSimple?",
    response: "Para no perderte ninguna oferta de RutaSimple, síguenos en nuestras redes sociales y mantente en contacto con nuestro equipo de atención al cliente. Publicamos regularmente promociones exclusivas en nuestras plataformas digitales y estamos listos para asistirte personalmente para que encuentres las mejores ofertas para tu viaje."
  },
  {
    question: "¿Cómo me contacto con RutaSimple?",
    response: "Para cualquier consulta o planificación de viajes, puedes enviarnos un correo a contacto@rutasimple.com, llamarnos al +1-800-RUTA-SIM, o conectarte con nosotros a través de nuestro Instagram, Facebook o Twitter. Estamos listos para ayudarte a vivir la aventura de tus sueños con RutaSimple."
  },
  {
    question: "¿Por qué debo usar a RutaSimple para viajar?",
    response: "RutaSimple ofrece una experiencia de viaje personalizada y libre de estrés, con itinerarios a medida y soporte continuo. Nuestro equipo experto garantiza un servicio de calidad y valor excepcional, todo mientras promovemos un turismo responsable y sostenible. Viajar con nosotros no es solo llegar a tu destino; es descubrir, aprender y vivir aventuras inolvidables."
  }
]

export const reasons: Reason[] = [
  {
    title: "Experiencias únicas",
    description: "Desde escapadas rurales hasta exploraciones urbanas, te llevamos a lugares que despiertan tus sentidos.",
    icon: "plane"
  },
  {
    title: "Itinerarios personalizados",
    description: "Diseñamos tu viaje a medida, adaptándonos a tus preferencias y presupuesto.",
    icon: "money"
  },
  {
    title: "Asistencia completa",
    description: "Nuestro equipo de expertos está disponible 24/7 para asegurar que tu viaje sea perfecto.",
    icon: "group"
  }
]
