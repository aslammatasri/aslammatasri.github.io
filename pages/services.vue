<script setup lang="ts">
import { profile, showServices } from '~/data/site'
if (!showServices) await navigateTo('/', { replace: true })
useHead({ title: 'Services — Aslam' })
</script>

<template>
  <div class="container section" style="padding-top: 64px">
    <p class="mono muted">Services</p>
    <h1 class="display h-page" style="margin-top: 16px">How I can <em>help.</em></h1>
    <ul class="svc">
      <li v-for="(s, i) in profile.services" :key="s.title" v-reveal>
        <span class="mono muted">0{{ i + 1 }}</span>
        <h2 class="display h-section">{{ s.title }}</h2>
        <p class="lede muted">{{ s.text }}</p>
      </li>
    </ul>

    <SectionHeader index="05" label="Working together" />
    <ol class="proc">
      <li v-for="(s, i) in profile.process" :key="s" v-reveal="i * 80">
        <span class="display" style="font-size: 64px; color: var(--accent)">0{{ i + 1 }}</span>
        <span class="h-sub">{{ s }}</span>
      </li>
    </ol>
    <NuxtLink to="/contact" class="btn btn--solid" style="margin-top: 56px">Get in touch ↗</NuxtLink>
  </div>
</template>

<style scoped>
.svc { margin: 72px 0 112px; }
.svc li { display: grid; grid-template-columns: 80px 1.2fr 1fr; gap: 32px; align-items: baseline; padding: 36px 0; border-top: 1px solid var(--line); }
.svc li:last-child { border-bottom: 1px solid var(--line); }
.svc .h-section { font-size: clamp(32px, 3.8vw, 56px); }
.proc { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
.proc li { display: flex; flex-direction: column; gap: 8px; padding-top: 20px; border-top: 1px solid var(--ink); }
@media (max-width: 1024px) { .svc li { grid-template-columns: 1fr; gap: 12px; } .proc { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .proc { grid-template-columns: 1fr; } }
</style>
