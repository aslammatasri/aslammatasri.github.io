<script setup lang="ts">
import { projects, categories } from '~/data/site'
useHead({ title: 'Work — Aslam' })
const active = ref('All')
const shown = computed(() => active.value === 'All' ? projects : projects.filter(p => p.category === active.value))
</script>

<template>
  <div class="container section" style="padding-top: 64px">
    <p class="mono muted">Index · {{ projects.length }} projects</p>
    <h1 class="display h-page" style="margin-top: 16px">Work</h1>
    <div class="filters" role="group" aria-label="Filter by category">
      <button v-for="c in categories" :key="c" class="btn btn--sm" :aria-pressed="active === c" @click="active = c">{{ c }}</button>
    </div>
    <div>
      <ProjectRow v-for="(p, i) in shown" :key="p.slug" :project="p" :index="i" />
    </div>
  </div>
</template>

<style scoped>
.filters { display: flex; flex-wrap: wrap; gap: 10px; margin: 48px 0 40px; }
</style>
