<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ project: Project; index: number }>()
</script>
<template>
  <NuxtLink :to="`/work/${project.slug}`" class="row">
    <span class="mono row__n">{{ String(index + 1).padStart(2, '0') }}</span>
    <span class="row__main">
      <span class="display row__t">{{ project.title }}</span>
      <span class="row__c">{{ project.client }}</span>
    </span>
    <span class="mono row__cat">{{ project.category }}</span>
    <span class="mono row__y">{{ project.year }}</span>
    <span class="row__arrow" aria-hidden="true">↗</span>
  </NuxtLink>
</template>
<style scoped>
.row {
  position: relative; display: grid; grid-template-columns: 56px 1fr 160px 64px 32px; gap: 24px; align-items: center;
  padding: 28px 0; border-top: 1px solid var(--line);
  transition: padding .4s var(--ease), color .3s;
}
.row:first-child { border-top: 0; }
.row:last-child { border-bottom: 1px solid var(--line); }
.row__main { display: flex; flex-direction: column; gap: 4px; }
.row__t { font-size: clamp(32px, 4.2vw, 64px); transition: transform .4s var(--ease), color .3s; }
.row__c { color: var(--muted); font-size: 15px; }
.row__cat, .row__y, .row__n { color: var(--muted); }
.row__arrow { font-size: 24px; transition: transform .4s var(--ease), color .3s; }
.row:hover .row__t, .row:focus-visible .row__t { transform: translateX(16px); color: var(--accent); }
.row:hover .row__arrow, .row:focus-visible .row__arrow { transform: translate(4px, -4px); color: var(--accent); }
@media (max-width: 640px) {
  .row { grid-template-columns: 1fr 24px; gap: 8px 16px; padding: 22px 0; }
  .row__n, .row__cat { display: none; }
  .row__y { grid-column: 1; grid-row: 2; }
  .row__arrow { grid-column: 2; grid-row: 1; }
}
</style>
