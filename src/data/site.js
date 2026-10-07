export const WHATSAPP_NUMBER = '5491157104768'

export function whatsappUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/* Frase compartida por los mensajes de disponibilidad (fuente única) */
export const AVAILABILITY_PHRASE = 'consultar disponibilidad en Cabañas Alcampo'

export const WHATSAPP_DEFAULT = whatsappUrl(`Hola, quisiera ${AVAILABILITY_PHRASE}`)

export const MAPS_QUERY = 'Caba%C3%B1as+Alcampo+Villa+General+Belgrano'

export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/${MAPS_QUERY}`

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`

export const INSTAGRAM_URL = 'https://www.instagram.com/cabanas.alcampo/'

export const LOCATION_LABEL = 'Villa General Belgrano, Córdoba'

/* 4 canales de contacto en bloques separados.
   email e instagram son datos de ejemplo (formato a la vista):
   reemplazar por los reales cuando estén disponibles. */
export const contactChannels = [
    {
        id: 'graciela',
        kind: 'whatsapp',
        label: 'WhatsApp · Graciela',
        value: '+54 9 11 5710 4768',
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
        copy: WHATSAPP_NUMBER
    },
    {
        id: 'ricardo',
        kind: 'whatsapp',
        label: 'WhatsApp · Ricardo',
        value: '+54 9 3546 458 907',
        href: 'https://wa.me/5493546458907',
        copy: '+5493546458907'
    },
    {
        id: 'email',
        kind: 'email',
        label: 'Mail personal',
        value: 'reservas@alcampo.com.ar',
        href: 'mailto:reservas@alcampo.com.ar',
        copy: 'reservas@alcampo.com.ar'
    },
    {
        id: 'instagram',
        kind: 'instagram',
        label: 'Instagram',
        value: '@cabanas.alcampo',
        href: INSTAGRAM_URL,
        copy: '@cabanas.alcampo'
    }
]

export const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#cabanas', label: 'Cabañas' },
    { href: '#experiencia-servicios', label: 'Servicios' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#calendario', label: 'Fechas' },
    { href: '#contacto', label: 'Contacto' }
]

/* Ids de sección para el scroll-spy, derivados de la nav (sin duplicar a mano) */
export const spySectionIds = navLinks.map((l) => l.href.slice(1))

export const cabanaGalleries = {
    1: [
        { src: '/images/complejo/ext-05.jpg', alt: 'Cabaña 1 - Exterior' },
        { src: '/images/cabana-1/int-01.webp', alt: 'Cabaña 1 - Dormitorio' },
        { src: '/images/cabana-1/int-02.webp', alt: 'Cabaña 1 - Dormitorio 2' },
        { src: '/images/cabana-1/int-03.jpg', alt: 'Cabaña 1 - Comedor' }
    ],
    2: [
        { src: '/images/cabana-2/int-01.webp', alt: 'Cabaña 2 - Dormitorio' },
        { src: '/images/cabana-2/int-02.jpg', alt: 'Cabaña 2 - Comedor' }
    ],
    3: [
        { src: '/images/cabana-3/int-01.webp', alt: 'Cabaña 3 - Dormitorio' },
        { src: '/images/cabana-3/int-02.webp', alt: 'Cabaña 3 - Dormitorio 2' }
    ]
}

export const cabanas = [
    {
        id: 1,
        title: 'Cabaña 1',
        image: cabanaGalleries[1][0].src,
        pos: 'center 42%',
        features: [
            { icon: 'personas', label: 'Hasta 4 personas' },
            { icon: 'dormitorios', label: '2 dormitorios' },
            { icon: 'parrilla', label: 'Parrilla' }
        ]
    },
    {
        id: 2,
        title: 'Cabaña 2',
        image: cabanaGalleries[2][0].src,
        pos: 'center 55%',
        features: [
            { icon: 'personas', label: 'Hasta 4 personas' },
            { icon: 'dormitorios', label: '2 dormitorios' },
            { icon: 'parrilla', label: 'Parrilla' }
        ]
    },
    {
        id: 3,
        title: 'Cabaña 3',
        image: cabanaGalleries[3][0].src,
        pos: 'center 50%',
        features: [
            { icon: 'personas', label: 'Hasta 3 personas' },
            { icon: 'dormitorios', label: '1 dormitorio' },
            { icon: 'parrilla', label: 'Parrilla' }
        ]
    }
]

/* Servicios destacados: cada uno es una card con foto ampliable.
   FOTOS PENDIENTES: pileta (usa hero.jpg) y parrilla (usa ext-05.jpg)
   son placeholders hasta que lleguen las fotos definitivas del complejo. */
export const experienciaServicios = [
    {
        src: '/images/complejo/ext-01.webp',
        alt: 'Parque arbolado de Cabañas Alcampo con juegos infantiles',
        title: 'Parque de 1 ha con juegos',
        icon: 'parque',
        text: 'Espacio verde para que los chicos jueguen al aire libre mientras vos descansás.',
        pos: 'center 48%'
    },
    {
        src: '/images/hero.jpg',
        alt: 'Pileta de Cabañas Alcampo con solárium cercado y reposeras',
        title: 'Pileta de 11 × 5 m',
        icon: 'pileta',
        text: 'Piscina para adultos y niños, con solárium cercado y reposeras.',
        pos: 'center 62%'
    },
    {
        src: '/images/complejo/ext-03.webp',
        alt: 'Quincho techado con mesada y bancos en el predio de Cabañas Alcampo',
        title: 'Quincho techado',
        icon: 'quincho',
        text: 'Pérgola con mesa y bancos para comer al aire libre, en el corazón del parque.',
        pos: 'center 58%'
    },
    {
        src: '/images/complejo/ext-05.jpg',
        alt: 'Galería de cabaña con parrilla individual',
        title: 'Parrilla individual',
        icon: 'parrilla',
        text: 'Tu propio asado: cada cabaña tiene su parrilla.',
        pos: 'center 46%'
    }
]

/* Amenidades incluidas: chips sin foto. "Somos pet friendly" va al final. */
export const serviciosIncluidos = [
    { icon: 'wifi', label: 'WiFi en todo el predio' },
    { icon: 'cocina', label: 'Cocina equipada' },
    { icon: 'camas', label: 'Ropa de cama y toallas (con recambio)' },
    { icon: 'aire', label: 'Aire acondicionado en dormitorios' },
    { icon: 'fuego', label: 'Calefacción a gas en el living' },
    { icon: 'ventilador', label: 'Ventiladores de techo' },
    { icon: 'tv', label: 'TV satelital' },
    { icon: 'cochera', label: 'Cochera cubierta' },
    { icon: 'mascotas', label: 'Somos pet friendly', pet: true }
]

export const occupiedDates = {
    '2026-10': [1, 2, 3, 10, 11, 17, 18, 24, 25, 31],
    '2026-11': [1, 7, 8, 14, 15, 21, 22, 28, 29],
    '2026-12': [24, 25, 26, 27, 28, 29, 30, 31],
    '2027-01': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}
