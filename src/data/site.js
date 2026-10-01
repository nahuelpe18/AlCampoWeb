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
    { href: '#experiencia-servicios', label: 'Experiencia y Servicios' },
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
        people: 'Hasta 4 personas',
        rooms: '2 dormitorios'
    },
    {
        id: 2,
        title: 'Cabaña 2',
        image: cabanaGalleries[2][0].src,
        people: 'Hasta 4 personas',
        rooms: '2 dormitorios'
    },
    {
        id: 3,
        title: 'Cabaña 3',
        image: cabanaGalleries[3][0].src,
        people: 'Hasta 3 personas',
        rooms: '1 dormitorio'
    }
]

export const complejoGallery = [
    { src: '/images/complejo/ext-04.jpg', alt: 'Vista panorámica de Cabañas Alcampo' },
    { src: '/images/complejo/ext-02.webp', alt: 'Piscina de Cabañas Alcampo' },
    { src: '/images/complejo/ext-03.webp', alt: 'Pérgola y zona de descanso' },
    { src: '/images/complejo/ext-01.webp', alt: 'Parque y juegos infantiles' },
    { src: '/images/complejo/ext-05.jpg', alt: 'Fachada de cabaña' }
]

export const occupiedDates = {
    '2026-10': [1, 2, 3, 10, 11, 17, 18, 24, 25, 31],
    '2026-11': [1, 7, 8, 14, 15, 21, 22, 28, 29],
    '2026-12': [24, 25, 26, 27, 28, 29, 30, 31],
    '2027-01': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}
