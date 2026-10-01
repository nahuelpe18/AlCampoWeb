import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                revealObserver.unobserve(entry.target)
            }
        })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
)

const app = createApp(App)

app.directive('reveal', {
    mounted(el) {
        el.classList.add('fade-in')
        revealObserver.observe(el)
    },
    unmounted(el) {
        revealObserver.unobserve(el)
    }
})

app.mount('#app')
