import { reactive } from 'vue'

const state = reactive({
    open: false,
    images: [],
    index: 0
})

export function useLightbox() {
    function open(images, index = 0) {
        if (!images || images.length === 0) return
        state.images = images
        state.index = index
        state.open = true
        document.body.style.overflow = 'hidden'
    }

    function close() {
        state.open = false
        document.body.style.overflow = ''
    }

    function next() {
        if (state.images.length === 0) return
        state.index = (state.index + 1) % state.images.length
    }

    function prev() {
        if (state.images.length === 0) return
        state.index = (state.index - 1 + state.images.length) % state.images.length
    }

    return { state, open, close, next, prev }
}
