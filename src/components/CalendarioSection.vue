<script setup>
import { ref, computed } from 'vue'
import { occupiedDates, whatsappUrl, AVAILABILITY_PHRASE } from '../data/site'

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

const today = new Date()
today.setHours(0, 0, 0, 0)

const viewDate = ref(new Date(today.getFullYear(), today.getMonth(), 1))
const selectedCheckin = ref(null)
const selectedCheckout = ref(null)

const title = computed(
    () => `${monthNames[viewDate.value.getMonth()]} ${viewDate.value.getFullYear()}`
)

const days = computed(() => {
    const year = viewDate.value.getFullYear()
    const month = viewDate.value.getMonth()
    const startDow = (new Date(year, month, 1).getDay() + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`
    const occupied = occupiedDates[monthKey] || []

    const list = []
    for (let i = 0; i < startDow; i++) {
        list.push({ type: 'empty', key: `empty-${i}` })
    }
    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d)
        date.setHours(0, 0, 0, 0)

        let state = 'available'
        if (date < today) state = 'past'
        else if (occupied.includes(d)) state = 'occupied'

        let modifier = ''
        if (selectedCheckin.value && date.getTime() === selectedCheckin.value.getTime()) {
            modifier = 'selected'
        } else if (selectedCheckout.value && date.getTime() === selectedCheckout.value.getTime()) {
            modifier = 'selected'
        } else if (
            selectedCheckin.value &&
            selectedCheckout.value &&
            date > selectedCheckin.value &&
            date < selectedCheckout.value
        ) {
            modifier = 'range'
        }

        list.push({
            type: 'day',
            key: `${year}-${month + 1}-${d}`,
            day: d,
            date,
            state,
            modifier,
            isToday: date.getTime() === today.getTime()
        })
    }
    return list
})

const selection = computed(() => {
    const opts = { day: 'numeric', month: 'long', year: 'numeric' }

    if (selectedCheckin.value && selectedCheckout.value) {
        const checkinStr = selectedCheckin.value.toLocaleDateString('es-AR', opts)
        const checkoutStr = selectedCheckout.value.toLocaleDateString('es-AR', opts)
        const nights = Math.round(
            (selectedCheckout.value - selectedCheckin.value) / (1000 * 60 * 60 * 24)
        )
        return {
            text: `${checkinStr} → ${checkoutStr} (${nights} ${nights === 1 ? 'noche' : 'noches'})`,
            url: whatsappUrl(
                `Hola, quisiera ${AVAILABILITY_PHRASE}:\n\n` +
                `Check-in: ${checkinStr}\nCheck-out: ${checkoutStr}\n` +
                `Noches: ${nights}\nPersonas: ___`
            )
        }
    }

    if (selectedCheckin.value) {
        return {
            text: `Check-in: ${selectedCheckin.value.toLocaleDateString('es-AR', opts)} — Elegí el check-out`,
            url: null
        }
    }

    return null
})

function isRangeAvailable(from, to) {
    const check = new Date(from)
    while (check < to) {
        check.setDate(check.getDate() + 1)
        const key = `${check.getFullYear()}-${String(check.getMonth() + 1).padStart(2, '0')}`
        const occupied = occupiedDates[key] || []
        if (occupied.includes(check.getDate())) return false
    }
    return true
}

function selectDay(day) {
    if (day.state !== 'available') return

    if (!selectedCheckin.value || selectedCheckout.value) {
        selectedCheckin.value = day.date
        selectedCheckout.value = null
    } else if (day.date > selectedCheckin.value) {
        if (isRangeAvailable(selectedCheckin.value, day.date)) {
            selectedCheckout.value = day.date
        } else {
            selectedCheckin.value = day.date
            selectedCheckout.value = null
        }
    } else {
        selectedCheckin.value = day.date
        selectedCheckout.value = null
    }
}

function changeMonth(delta) {
    const next = new Date(viewDate.value)
    next.setMonth(next.getMonth() + delta)
    viewDate.value = next
}

function dayClasses(day) {
    return [
        `calendario__day--${day.state}`,
        day.modifier ? `calendario__day--${day.modifier}` : '',
        day.isToday ? 'calendario__day--today' : ''
    ]
}

const stateLabels = {
    available: 'disponible',
    occupied: 'ocupado',
    past: 'no disponible'
}

function dayLabel(day) {
    const opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    const date = day.date.toLocaleDateString('es-AR', opts)
    const label = `${date}, ${stateLabels[day.state]}`
    return day.modifier === 'selected' ? `${label}, seleccionado` : label
}
</script>

<template>
  <section class="calendario-section" id="calendario">
    <div class="container">
      <div class="section-header section-header--center" v-reveal>
        <p class="section-label">DISPONIBILIDAD</p>
        <h2 class="section-title">Consultá las fechas disponibles</h2>
        <p class="section-desc">
          Elegí las fechas de tu estadía y consultá disponibilidad por WhatsApp.
        </p>
      </div>

      <div class="calendario">
        <div class="calendario__header" v-reveal>
          <button type="button" class="calendario__nav" aria-label="Mes anterior" @click="changeMonth(-1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h3 class="calendario__title">{{ title }}</h3>
          <button type="button" class="calendario__nav" aria-label="Mes siguiente" @click="changeMonth(1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div class="calendario__days-header">
          <span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sa</span><span>Do</span>
        </div>

        <div class="calendario__grid" role="group" :aria-label="`Calendario de ${title}`">
          <template v-for="day in days" :key="day.key">
            <span v-if="day.type === 'empty'" class="calendario__day calendario__day--empty" aria-hidden="true"></span>
            <button
              v-else
              type="button"
              class="calendario__day"
              :class="dayClasses(day)"
              :disabled="day.state !== 'available'"
              :aria-label="dayLabel(day)"
              @click="selectDay(day)"
            >
              {{ day.day }}
            </button>
          </template>
        </div>

        <div class="calendario__legend">
          <span class="calendario__legend-item"><span class="calendario__dot calendario__dot--available"></span> Disponible</span>
          <span class="calendario__legend-item"><span class="calendario__dot calendario__dot--occupied"></span> Ocupado</span>
          <span class="calendario__legend-item"><span class="calendario__dot calendario__dot--past"></span> No disponible</span>
        </div>

        <div v-if="selection" class="calendario__selection" role="status" aria-live="polite">
          <p><strong>Seleccionado:</strong> {{ selection.text }}</p>
          <a
            v-if="selection.url"
            :href="selection.url"
            class="btn btn--primary btn--sm"
            target="_blank"
            rel="noopener"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
