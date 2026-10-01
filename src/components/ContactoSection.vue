<script setup>
import { reactive, ref, onUnmounted } from 'vue'
import { contactChannels, whatsappUrl, AVAILABILITY_PHRASE } from '../data/site'

const form = reactive({
    nombre: '',
    checkin: '',
    checkout: '',
    personas: '',
    mensaje: ''
})

const errors = reactive({
    nombre: '',
    checkin: '',
    checkout: '',
    personas: ''
})

function localISO(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
}

const todayStr = localISO(new Date())
const minCheckout = ref('')

function onCheckinChange() {
    errors.checkin = ''
    if (!form.checkin) {
        minCheckout.value = ''
        return
    }
    const next = new Date(form.checkin + 'T12:00:00')
    next.setDate(next.getDate() + 1)
    const min = localISO(next)
    minCheckout.value = min
    if (form.checkout && form.checkout < min) {
        form.checkout = ''
    }
}

function validate() {
    errors.nombre = form.nombre.trim() ? '' : 'Escribí tu nombre.'
    errors.checkin = form.checkin ? '' : 'Elegí la fecha de llegada.'
    errors.checkout = form.checkout ? '' : 'Elegí la fecha de salida.'
    errors.personas = form.personas ? '' : 'Indicá cuántas personas vienen.'
    return !Object.values(errors).some(Boolean)
}

function submitForm() {
    if (!validate()) return

    const opts = { day: 'numeric', month: 'long', year: 'numeric' }
    const checkinStr = new Date(form.checkin + 'T12:00:00').toLocaleDateString('es-AR', opts)
    const checkoutStr = new Date(form.checkout + 'T12:00:00').toLocaleDateString('es-AR', opts)

    let msg = `Hola, soy ${form.nombre}.\n\n`
    msg += `Quisiera ${AVAILABILITY_PHRASE}:\n\n`
    msg += `Check-in: ${checkinStr}\n`
    msg += `Check-out: ${checkoutStr}\n`
    msg += `Personas: ${form.personas}`
    if (form.mensaje.trim()) msg += `\nMensaje: ${form.mensaje.trim()}`

    window.open(whatsappUrl(msg), '_blank')
}

const copiedId = ref(null)
let copiedTimer = null

async function copyValue(channel) {
    let ok = false
    try {
        await navigator.clipboard.writeText(channel.copy)
        ok = true
    } catch {
        const ta = document.createElement('textarea')
        ta.value = channel.copy
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        try {
            ok = document.execCommand('copy')
        } catch {
            ok = false
        }
        ta.remove()
    }

    if (!ok) return
    copiedId.value = channel.id
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => {
        copiedId.value = null
    }, 1800)
}

onUnmounted(() => clearTimeout(copiedTimer))
</script>

<template>
  <section class="contacto" id="contacto">
    <div class="container">
      <div class="section-header section-header--center" v-reveal>
        <p class="section-label">CONTACTO</p>
        <h2 class="section-title">Escribinos</h2>
        <p class="section-desc">
          Elegí el canal que prefieras o mandanos la consulta con el formulario.
          Respondemos por WhatsApp.
        </p>
      </div>

      <div class="contacto__grid">
        <div class="contacto__panel">
          <p class="contacto__panel-title">Contacto directo</p>

          <div class="contacto__channels">
            <div
              v-for="(channel, index) in contactChannels"
              :key="channel.id"
              class="contacto__channel"
              v-reveal
              :style="{ transitionDelay: `${index * 80}ms` }"
            >
              <span class="contacto__channel-icon">
                <svg v-if="channel.kind === 'whatsapp'" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <svg v-else-if="channel.kind === 'email'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>

              <a
                class="contacto__channel-body"
                :href="channel.href"
                :target="channel.kind === 'email' ? null : '_blank'"
                :rel="channel.kind === 'email' ? null : 'noopener'"
              >
                <span class="contacto__channel-label">{{ channel.label }}</span>
                <span class="contacto__channel-value">{{ channel.value }}</span>
              </a>

              <button
                type="button"
                class="contacto__channel-copy"
                :class="{ copied: copiedId === channel.id }"
                :aria-label="'Copiar ' + channel.value"
                @click="copyValue(channel)"
              >
                <svg v-if="copiedId !== channel.id" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </div>
          </div>

          <p class="contacto__panel-hint">
            Tocá un canal para abrirlo, o copiá el dato con el ícono de la derecha.
          </p>
        </div>

        <form class="contacto__form" novalidate @submit.prevent="submitForm" v-reveal>
          <div class="form-field" :class="{ 'form-field--error': errors.nombre }">
            <label for="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              v-model="form.nombre"
              placeholder="Tu nombre"
              :aria-invalid="!!errors.nombre"
              @input="errors.nombre = ''"
            >
            <span v-if="errors.nombre" class="form-field__error" role="alert">{{ errors.nombre }}</span>
          </div>

          <div class="form-row">
            <div class="form-field" :class="{ 'form-field--error': errors.checkin }">
              <label for="checkin">Check-in *</label>
              <input
                type="date"
                id="checkin"
                v-model="form.checkin"
                :min="todayStr"
                :aria-invalid="!!errors.checkin"
                @change="onCheckinChange"
              >
              <span v-if="errors.checkin" class="form-field__error" role="alert">{{ errors.checkin }}</span>
            </div>

            <div class="form-field" :class="{ 'form-field--error': errors.checkout }">
              <label for="checkout">Check-out *</label>
              <input
                type="date"
                id="checkout"
                v-model="form.checkout"
                :min="minCheckout || todayStr"
                :aria-invalid="!!errors.checkout"
                @change="errors.checkout = ''"
              >
              <span v-if="errors.checkout" class="form-field__error" role="alert">{{ errors.checkout }}</span>
            </div>

            <div class="form-field" :class="{ 'form-field--error': errors.personas }">
              <label for="personas">Personas *</label>
              <select
                id="personas"
                v-model="form.personas"
                :aria-invalid="!!errors.personas"
                @change="errors.personas = ''"
              >
                <option value="" disabled>Elegir</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <span v-if="errors.personas" class="form-field__error" role="alert">{{ errors.personas }}</span>
            </div>
          </div>

          <div class="form-field">
            <label for="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              v-model="form.mensaje"
              rows="3"
              placeholder="Contanos qué necesitás..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn--primary btn--full contacto__submit">
            Enviar consulta
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <p class="contacto__hint">Se abrirá WhatsApp con tu consulta ya escrita.</p>
        </form>
      </div>
    </div>
  </section>
</template>
