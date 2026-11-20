// SSR: no-op directive so markup renders visible; client plugin adds animation.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', { getSSRProps: () => ({}) })
})
