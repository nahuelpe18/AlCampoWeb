<template>
  <section class="servicios">
    <div class="container">
      <div class="section-header section-header--center" v-reveal>
        <p class="section-label">SERVICIOS</p>
        <h2 class="section-title">Todo lo que necesitás para disfrutar</h2>
        <p class="section-desc">
          Estos son los servicios incluidos en tu estadía.
          Todo está listo para que solo te preocupes por descansar.
        </p>
      </div>

      <div class="servicios__grid" v-reveal>
        <article class="servicio">
          <div class="servicio__icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
          </div>
          <h3 class="servicio__title">Ropa de cama y toallas</h3>
          <p class="servicio__text">Llegás con las camas puestas y toallas limpias.</p>
        </article>

        <article class="servicio">
          <div class="servicio__icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </div>
          <h3 class="servicio__title">WiFi en todo el predio</h3>
          <p class="servicio__text">Conectate desde la cabaña o desde el parque.</p>
        </article>

        <article class="servicio">
          <div class="servicio__icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <circle cx="6" cy="9" r="2" />
              <circle cx="10" cy="6" r="2" />
              <circle cx="14" cy="6" r="2" />
              <circle cx="18" cy="9" r="2" />
              <path d="M12 11c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3.5 3.5 3.5h4c2 0 3.5-1.5 3.5-3.5C17.5 13.5 15 11 12 11z" />
            </svg>
          </div>
          <h3 class="servicio__title">Mascotas</h3>
          <p class="servicio__text">Consultanos antes de reservar si venís con tu mascota.</p>
        </article>

        <article class="servicio">
          <div class="servicio__icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M12 2c1.5 3 4.5 4.5 4.5 8.5A4.5 4.5 0 0 1 12 15a4.5 4.5 0 0 1-4.5-4.5C7.5 8 9 7 9.5 5.5 10.5 7 11 8 11 9.5 11 8 11 4 12 2z" />
              <path d="M8 21h8" />
              <path d="M9 18h6" />
            </svg>
          </div>
          <h3 class="servicio__title">Parrilla individual</h3>
          <p class="servicio__text">Cada cabaña tiene su propia parrilla.</p>
        </article>

        <article class="servicio">
          <div class="servicio__icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M12 22v-7" />
              <path d="M12 15c3.3 0 6-2.7 6-6 0-3.3-2.7-6-6-7-3.3 1-6 3.7-6 7 0 3.3 2.7 6 6 6z" />
            </svg>
          </div>
          <h3 class="servicio__title">Parque de 1 hectárea</h3>
          <p class="servicio__text">Mucho espacio verde para jugar y descansar.</p>
        </article>

        <article class="servicio">
          <div class="servicio__icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M2 15c6.667-6 13.333 0 20-6" />
              <path d="M2 19c6.667-6 13.333 0 20-6" />
            </svg>
          </div>
          <h3 class="servicio__title">Pileta</h3>
          <p class="servicio__text">Para pasar el rato en verano, con agua para grandes y chicos.</p>
        </article>
      </div>
    </div>
  </section>
</template>
