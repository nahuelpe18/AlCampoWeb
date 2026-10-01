import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds) {
    const activeSection = ref(sectionIds[0])
    const scrolled = ref(false)

    let rafId = 0

    function update() {
        rafId = 0
        scrolled.value = window.scrollY > 50

        let current = sectionIds[0]
        const offset = window.scrollY + 120
        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el && offset >= el.offsetTop) {
                current = id
            }
        })
        activeSection.value = current
    }

    function onScroll() {
        if (rafId) return
        rafId = requestAnimationFrame(update)
    }

    onMounted(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
        update()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
        if (rafId) cancelAnimationFrame(rafId)
    })

    return { activeSection, scrolled }
}
