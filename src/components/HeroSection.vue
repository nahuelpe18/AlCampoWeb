<script setup>
import { WHATSAPP_DEFAULT } from '../data/site'
</script>

<template>
  <section class="hero" id="inicio">
    <div class="hero__bg">
      <img src="/images/hero.jpg" alt="Piscina y jardín de Cabañas Alcampo" width="1170" height="658" loading="eager" fetchpriority="high">
    </div>
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <p class="hero__location">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Villa General Belgrano · Córdoba
      </p>

      <h1 class="hero__title">Viví la <em>naturaleza y la paz</em> en Villa General Belgrano.</h1>

      <p class="hero__subtitle">
        Descubrí nuestras cabañas en un predio de una hectárea con vista al Champaquí.
        Un lugar pensado para descansar, disfrutar y reconectar.
      </p>

      <div class="hero__cta">
        <a :href="WHATSAPP_DEFAULT" class="btn btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Consultar disponibilidad
        </a>
        <a href="#cabanas" class="btn btn--secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Conocé las cabañas
        </a>
      </div>
    </div>

    <div class="hero__stats" role="list" aria-label="Datos de la propiedad">
      <div class="hero__stat" role="listitem">
        <strong>1 ha</strong>
        <span>de predio</span>
      </div>
      <div class="hero__stat" role="listitem">
        <strong>3</strong>
        <span>cabañas</span>
      </div>
      <div class="hero__stat" role="listitem">
        <strong>1.400 m</strong>
        <span>de altura</span>
      </div>
      <div class="hero__stat" role="listitem">
        <strong>360°</strong>
        <span>de naturaleza</span>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span>Descubrí más</span>
      <span class="hero__scroll-line"></span>
    </div>
  </section>
</template>
