<script setup>
import { cabanas, cabanaGalleries, WHATSAPP_DEFAULT } from '../data/site'
import { useLightbox } from '../composables/useLightbox'

const { open } = useLightbox()

const CABANA_ICONS = {
  personas:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  dormitorios:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  parrilla:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>'
}

function openGallery(id) {
  open(cabanaGalleries[id], 0)
}
</script>

<template>
  <section class="cabanas" id="cabanas">
    <div class="container">
      <div class="cabanas__header">
        <div class="section-header" v-reveal>
          <p class="section-label">NUESTRAS CABAÑAS</p>
          <h2 class="section-title">Cabañas 1, 2 y 3</h2>
          <p class="section-desc">Ambientes acogedores y equipados para que disfrutes de una estadía única.</p>
        </div>
        <a :href="WHATSAPP_DEFAULT" class="btn btn--outline" target="_blank" rel="noopener">
          Ver más detalles
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="cabanas__grid" v-reveal>
        <article v-for="cabana in cabanas" :key="cabana.id" class="cabana-card">
          <button
            type="button"
            class="cabana-card__media"
            :aria-label="'Ver galería de ' + cabana.title"
            @click="openGallery(cabana.id)"
          >
            <img
              :src="cabana.image"
              :alt="cabana.title + ' - Cabañas Alcampo'"
              :style="{ objectPosition: cabana.pos }"
              loading="lazy"
              decoding="async"
            >
            <span class="cabana-card__zoom" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </span>
          </button>

          <div class="cabana-card__content">
            <h3 class="cabana-card__title">{{ cabana.title }}</h3>

            <ul class="cabana-card__features">
              <li v-for="feature in cabana.features" :key="feature.label" class="cabana-card__feature">
                <span class="cabana-card__feature-icon" aria-hidden="true" v-html="CABANA_ICONS[feature.icon]"></span>
                {{ feature.label }}
              </li>
            </ul>

            <button
              type="button"
              class="cabana-card__btn"
            :aria-label="'Ampliar galería de ' + cabana.title"
              @click="openGallery(cabana.id)"
            >
              Ver galería
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
