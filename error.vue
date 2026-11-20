<script setup lang="ts">
defineProps<{ error: { statusCode: number; statusMessage?: string } }>()
</script>
<template>
  <div>
    <SiteHeader />
    <div class="container section" style="min-height: 60vh">
      <h1 class="display" style="font-size: clamp(100px, 25vw, 360px)"><em>{{ error.statusCode }}</em></h1>
      <p class="mono muted" style="margin: 16px 0 32px">{{ error.statusMessage || 'Something went wrong' }}</p>
      <button class="btn" @click="clearError({ redirect: '/' })">Back home</button>
    </div>
    <SiteFooter />
  </div>
</template>
