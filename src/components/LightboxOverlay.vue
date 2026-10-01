<script setup>
import { computed, onMounted, onUnmounted, nextTick, watch, ref } from 'vue'
import { useLightbox } from '../composables/useLightbox'

const { state, close, next, prev } = useLightbox()

const current = computed(() => state.images[state.index])
const showNav = computed(() => state.images.length > 1)

const dialog = ref(null)
let lastFocused = null

function focusables() {
    if (!dialog.value) return []
    return [...dialog.value.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')]
        .filter((el) => !el.disabled)
}

function onKeydown(e) {
    if (!state.open) return
    if (e.key === 'Escape') {
        close()
        return
    }
    if (e.key === 'ArrowRight') {
        next()
        return
    }
    if (e.key === 'ArrowLeft') {
        prev()
        return
    }
    if (e.key === 'Tab') {
        const els = focusables()
        if (!els.length) return
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault()
            last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault()
            first.focus()
        }
    }
}

watch(
    () => state.open,
    async (open) => {
        if (open) {
            lastFocused = document.activeElement
            await nextTick()
            focusables()[0]?.focus()
        } else if (lastFocused) {
            lastFocused.focus()
            lastFocused = null
        }
    }
)

let touchStartX = 0

function onTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX
}

function onTouchEnd(e) {
    const diff = touchStartX - e.changedTouches[0].screenX
    if (Math.abs(diff) < 50) return
    if (diff > 0) next()
    else prev()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div
    v-if="state.open"
    ref="dialog"
    class="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Galería de fotos"
    @click.self="close"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <button type="button" class="lightbox__close" aria-label="Cerrar" @click="close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    <button
      v-if="showNav"
      type="button"
      class="lightbox__nav lightbox__nav--prev"
      aria-label="Foto anterior"
      @click="prev"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <div class="lightbox__content">
      <img v-if="current" :src="current.src" :alt="current.alt">
    </div>

    <button
      v-if="showNav"
      type="button"
      class="lightbox__nav lightbox__nav--next"
      aria-label="Foto siguiente"
      @click="next"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>

    <div class="lightbox__counter" aria-live="polite">
      {{ state.index + 1 }} / {{ state.images.length }}
    </div>
  </div>
</template>
