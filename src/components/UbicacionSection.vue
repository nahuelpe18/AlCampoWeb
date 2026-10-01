<script setup>
import { MAPS_EMBED_URL, MAPS_SEARCH_URL, WHATSAPP_DEFAULT } from '../data/site'
</script>

<template>
  <section class="ubicacion" id="ubicacion">
    <div class="container">
      <div class="section-header section-header--center" v-reveal>
        <p class="section-label">CÓMO LLEGAR</p>
        <h2 class="section-title">Ubicación</h2>
        <p class="section-desc">
          Estamos en Villa General Belgrano, Córdoba.
          Fácil de llegar y a pocos minutos del centro.
        </p>
      </div>

      <div class="ubicacion__grid" v-reveal>
        <div class="ubicacion__mapa">
          <iframe
            :src="MAPS_EMBED_URL"
            title="Mapa de Cabañas Alcampo en Villa General Belgrano"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="ubicacion__info">
          <div class="ubicacion__card">
            <div class="ubicacion__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3>Villa General Belgrano</h3>
              <p>Córdoba, Argentina</p>
            </div>
          </div>

          <div class="ubicacion__card">
            <div class="ubicacion__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </div>
            <div>
              <h3>Cerca de todo</h3>
              <p>A solo 3,5 km del centro y muy cerca de la Ruta 5.</p>
            </div>
          </div>

          <div class="ubicacion__card">
            <div class="ubicacion__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M8 21l4-10 4 10" />
                <path d="M12 11V3" />
                <path d="M6 15h12" />
              </svg>
            </div>
            <div>
              <h3>El predio</h3>
              <p>Una hectárea con parque, pileta y vista al Cerro Champaquí.</p>
            </div>
          </div>

          <div class="ubicacion__actions">
            <a :href="MAPS_SEARCH_URL" class="btn btn--primary" target="_blank" rel="noopener">
              Cómo llegar en Google Maps
            </a>
            <a :href="WHATSAPP_DEFAULT" class="btn btn--outline" target="_blank" rel="noopener">
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
