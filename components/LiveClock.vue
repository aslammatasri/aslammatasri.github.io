<script setup lang="ts">
const props = defineProps<{ tz: string; city: string }>()
const time = ref('--:--')
let t: ReturnType<typeof setInterval> | undefined
const tick = () => {
  time.value = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: props.tz }).format(new Date())
}
onMounted(() => { tick(); t = setInterval(tick, 30_000) })
onBeforeUnmount(() => clearInterval(t))
</script>
<template><span class="mono" aria-label="Local time">{{ time }} {{ city }}</span></template>
