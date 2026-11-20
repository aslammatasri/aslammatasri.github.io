export default defineNuxtPlugin((nuxtApp) => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const io = reduce || !('IntersectionObserver' in window) ? null : new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { (e.target as HTMLElement).classList.add('is-in'); io!.unobserve(e.target) }
    }
  }, { threshold: 0.12 })

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      if (io) io.observe(el); else el.classList.add('is-in')
    }
  })
})
