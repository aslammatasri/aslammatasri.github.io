<script setup lang="ts">
defineProps<{ index: string; label: string }>()
</script>
<template>
  <div class="sh" v-reveal>
    <p class="mono"><span class="sh__n">{{ index }}</span> {{ label }}</p>
    <hr class="rule">
  </div>
</template>
<style scoped>
.sh { display: flex; flex-direction: column; gap: 14px; margin-bottom: 48px; }
.sh__n { color: var(--accent); margin-right: 12px; }
</style>
