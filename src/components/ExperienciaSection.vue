<script setup>
import { experienciaServicios } from '../data/site'
import { useLightbox } from '../composables/useLightbox'

const { open } = useLightbox()
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

      <div class="experiencia__grid" v-reveal>
        <button
          v-for="(item, index) in experienciaServicios"
          :key="item.src"
          type="button"
          class="experiencia__item"
          :class="{ 'experiencia__item--large': item.large }"
          :aria-label="'Ver foto: ' + item.title"
          @click="open(experienciaServicios, index)"
        >
          <img :src="item.src" :alt="item.alt" :style="{ objectPosition: item.pos }" loading="lazy">
          <span class="experiencia__overlay">
            <span class="experiencia__overlay-title">{{ item.title }}</span>
            <span class="experiencia__overlay-text">{{ item.text }}</span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
