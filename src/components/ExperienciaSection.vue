<script setup>
import { experienciaServicios, serviciosIncluidos } from '../data/site'
import { useLightbox } from '../composables/useLightbox'

const { open } = useLightbox()

const SERVICE_ICONS = {
  parque:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M7.5 17h9L12 5 7.5 17z"/><path d="M4 22h16"/></svg>',
  pileta:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7c.6.5 1.2 1 2.5 1C7 8 7 6 9.5 6c2.6 0 2.4 2 5 2 1.3 0 1.9-.5 2.5-1"/><path d="M2 13c.6.5 1.2 1 2.5 1C7 14 7 12 9.5 12c2.6 0 2.4 2 5 2 1.3 0 1.9-.5 2.5-1"/><path d="M2 19c.6.5 1.2 1 2.5 1C7 20 7 18 9.5 18c2.6 0 2.4 2 5 2 1.3 0 1.9-.5 2.5-1"/></svg>',
  camas:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>',
  wifi:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.86a10 10 0 0 1 14 0"/><path d="M8.5 16.43a5 5 0 0 1 7 0"/></svg>',
  parrilla:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  quincho:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10l10-6 10 6"/><path d="M2 10h20"/><path d="M5 10v10"/><path d="M19 10v10"/><path d="M8 15h8"/><path d="M9 15v3"/><path d="M15 15v3"/></svg>',
  cocina:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M20 12v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6"/><path d="M6 9 18 5"/><path d="M8 12V9"/><path d="M16 12V7"/></svg>',
  aire:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="m4.9 4.9 14.2 14.2"/><path d="m19.1 4.9-14.2 14.2"/></svg>',
  fuego:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M12 9v3"/></svg>',
  ventilador:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.83 16.38a6.08 6.08 0 0 1-8.62-7l5.41 1.45a6.08 6.08 0 0 1 7-8.62l-1.45 5.41a6.08 6.08 0 0 1 8.62 7l-5.41-1.45a6.08 6.08 0 0 1-7 8.62l1.45-5.41Z"/><circle cx="12" cy="12" r="1"/></svg>',
  tv:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="m8 3 4 3 4-3"/></svg>',
  cochera:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.2-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
  mascotas:
    '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.05Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>'
}
</script>

<template>
  <section class="experiencia">
    <div class="container">
      <div class="section-header section-header--center" v-reveal>
        <p class="section-label section-label--light">SERVICIOS</p>
        <h2 class="section-title section-title--light">Todo lo que necesitás para <em>disfrutar en familia</em></h2>
        <p class="section-desc section-desc--light">
          Estos son los servicios incluidos en tu estadía.
          Todo está listo para que solo te preocupes por descansar.
        </p>
      </div>

      <div class="servicios__grid" v-reveal>
        <article
          v-for="(item, index) in experienciaServicios"
          :key="item.title"
          class="servicio-card"
        >
          <button
            type="button"
            class="servicio-card__media"
            :aria-label="'Ver foto: ' + item.title"
            @click="open(experienciaServicios, index)"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              :style="{ objectPosition: item.pos }"
              loading="lazy"
              decoding="async"
            >
            <span class="servicio-card__zoom" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
                <path d="M8 11h6" />
                <path d="M11 8v6" />
              </svg>
            </span>
          </button>

          <div class="servicio-card__body">
            <span class="servicio-card__icon" aria-hidden="true" v-html="SERVICE_ICONS[item.icon]"></span>
            <h3 class="servicio-card__title">{{ item.title }}</h3>
            <p class="servicio-card__text">{{ item.text }}</p>
            <button
              type="button"
              class="servicio-card__cta"
            :aria-label="'Ampliar foto de ' + item.title"
              @click="open(experienciaServicios, index)"
            >
              Ver foto
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </article>
      </div>

      <p class="servicios__chips-title">Y también incluido en tu estadía</p>

      <ul class="servicios__chips" v-reveal>
        <li
          v-for="chip in serviciosIncluidos"
          :key="chip.label"
          class="servicio-chip"
          :class="{ 'servicio-chip--pet': chip.pet }"
        >
          <span class="servicio-chip__icon" aria-hidden="true" v-html="SERVICE_ICONS[chip.icon]"></span>
          {{ chip.label }}
        </li>
      </ul>
    </div>
  </section>
</template>
