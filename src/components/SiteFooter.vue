<script setup>
import { INSTAGRAM_URL, LOCATION_LABEL } from '../data/site'

const socials = [
    {
        id: 'instagram',
        label: 'Instagram de Cabañas Alcampo',
        href: INSTAGRAM_URL
    }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <a href="#inicio" class="footer__logo">
          <span class="footer__logo-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </span>
          <div>
            <span class="footer__logo-name">Alcampo</span>
            <span class="footer__logo-sub">Cabañas · Villa General Belgrano</span>
          </div>
        </a>

        <div class="footer__info">
          <p>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {{ LOCATION_LABEL }}
          </p>
        </div>

        <div class="footer__social">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>Tu descanso, nuestra mayor alegría.</p>
      </div>
    </div>
  </footer>
</template>
