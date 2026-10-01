<script setup>
import { complejoGallery } from '../data/site'
import { useLightbox } from '../composables/useLightbox'

const { open } = useLightbox()

/* Misma fuente que abre el lightbox: sin duplicar el contenido */
const items = complejoGallery.map((img, i) => ({ ...img, large: i === 0 }))
</script>

<template>
  <section class="experiencia">
    <div class="container">
      <div class="section-header" v-reveal>
        <p class="section-label section-label--light">EL LUGAR IDEAL PARA TUS VACACIONES</p>
        <h2 class="section-title section-title--light">Villa General Belgrano, Córdoba</h2>
      </div>

      <div class="experiencia__grid" v-reveal>
        <button
          v-for="(item, index) in items"
          :key="item.src"
          type="button"
          class="experiencia__item"
          :class="{ 'experiencia__item--large': item.large }"
          :aria-label="'Ver foto: ' + item.alt"
          @click="open(complejoGallery, index)"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy">
          <span v-if="item.large" class="experiencia__overlay">
            <span>El lugar ideal<br>para tus vacaciones</span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
