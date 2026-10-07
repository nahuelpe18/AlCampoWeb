<script setup>
import { cabanas, cabanaGalleries, WHATSAPP_DEFAULT } from '../data/site'
import { useLightbox } from '../composables/useLightbox'

const { open } = useLightbox()

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
          Ver más detalles →
        </a>
      </div>

      <div class="cabanas__grid" v-reveal>
        <article v-for="cabana in cabanas" :key="cabana.id" class="cabana-card">
          <div class="cabana-card__img">
            <img :src="cabana.image" :alt="cabana.title + ' - Cabañas Alcampo'" :style="{ objectPosition: cabana.pos }" loading="lazy">
          </div>
          <div class="cabana-card__content">
            <h3 class="cabana-card__title">{{ cabana.title }}</h3>
            <div class="cabana-card__details">
              <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                {{ cabana.people }}
              </span>
              <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v9" />
                </svg>
                {{ cabana.rooms }}
              </span>
              <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
                Parrilla
              </span>
            </div>
            <button class="cabana-card__btn" type="button" @click="openGallery(cabana.id)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Ver galería
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
