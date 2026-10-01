<template>
  <section class="beneficios">
    <div class="container">
      <h2 class="visually-hidden">Por qué elegir Cabañas Alcampo</h2>
      <div class="beneficios__grid" v-reveal>
        <div class="beneficio">
          <div class="beneficio__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <span class="beneficio__text">Naturaleza y<br>tranquilidad</span>
        </div>

        <div class="beneficio">
          <div class="beneficio__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M8 21l4-10 4 10" />
              <path d="M12 11V3" />
              <path d="M6 15h12" />
            </svg>
          </div>
          <span class="beneficio__text">Vista al<br>Champaquí</span>
        </div>

        <div class="beneficio">
          <div class="beneficio__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <span class="beneficio__text">Ideal para familias<br>y grupos</span>
        </div>

        <div class="beneficio">
          <div class="beneficio__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span class="beneficio__text">A solo 3,5 km del centro<br>y cerca de la Ruta 5.</span>
        </div>
      </div>
    </div>
  </section>
</template>
