<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import BeneficiosSection from './components/BeneficiosSection.vue'
import CabanasSection from './components/CabanasSection.vue'
import ExperienciaSection from './components/ExperienciaSection.vue'
import ServiciosSection from './components/ServiciosSection.vue'
import UbicacionSection from './components/UbicacionSection.vue'
import CalendarioSection from './components/CalendarioSection.vue'
import ContactoSection from './components/ContactoSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import LightboxOverlay from './components/LightboxOverlay.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <a class="skip-link" href="#contenido">Saltar al contenido principal</a>
  <SiteHeader />
  <main id="contenido" tabindex="-1">
    <HeroSection />
    <BeneficiosSection />
    <CabanasSection />
    <section id="experiencia-servicios" aria-label="Experiencia y Servicios">
      <ServiciosSection />
      <ExperienciaSection />
    </section>
    <UbicacionSection />
    <CalendarioSection />
    <ContactoSection />
  </main>
  <SiteFooter />
  <LightboxOverlay />
  <WhatsAppFloat />
</template>
