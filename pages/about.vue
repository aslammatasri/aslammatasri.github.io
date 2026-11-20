<script setup lang="ts">
import { profile } from '~/data/site'
useHead({ title: 'About — Aslam' })
</script>

<template>
  <div class="container section" style="padding-top: 64px">
    <p class="mono muted">About</p>
    <h1 class="display h-page" style="margin-top: 16px">Hello, I'm <em>{{ profile.shortName }}.</em></h1>

    <div class="top">
      <div class="art photo" role="img" aria-label="Portrait placeholder of Aslam" v-reveal></div>
      <div v-reveal="100">
        <p class="lede">{{ profile.bio[0] }}</p>
        <p class="muted" style="margin-top: 24px">{{ profile.bio[1] }}</p>
        <p class="mono" style="margin-top: 32px">{{ profile.personal }}</p>
      </div>
    </div>

    <div class="cols">
      <div v-reveal>
        <SectionHeader index="01" label="Skills" />
        <ul class="tags"><li v-for="s in profile.skills" :key="s" class="tag">{{ s }}</li></ul>
      </div>
      <div v-reveal="100">
        <SectionHeader index="02" label="Tools" />
        <ul class="tags"><li v-for="s in profile.tools" :key="s" class="tag">{{ s }}</li></ul>
      </div>
    </div>

    <SectionHeader index="03" label="Experience" />
    <ul class="list">
      <li v-for="e in profile.experience" :key="e.years" v-reveal>
        <span class="mono muted">{{ e.years }}</span>
        <span class="h-sub">{{ e.role }}</span>
        <span class="muted">{{ e.place }}</span>
      </li>
    </ul>

    <SectionHeader index="04" label="Education" />
    <ul class="list">
      <li v-for="e in profile.education" :key="e.title" v-reveal>
        <span class="mono muted">{{ e.years }}</span>
        <span class="h-sub">{{ e.title }}</span>
        <span class="muted">{{ e.place }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.top { display: grid; grid-template-columns: 5fr 6fr; gap: 80px; margin: 72px 0 112px; align-items: start; }
.photo { aspect-ratio: 4 / 5; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; margin-bottom: 112px; }
.tags { display: flex; flex-wrap: wrap; gap: 10px; }
.list { margin-bottom: 112px; }
.list li { display: grid; grid-template-columns: 200px 1.4fr 1fr; gap: 24px; padding: 22px 0; border-top: 1px solid var(--line); align-items: baseline; }
.list li:last-child { border-bottom: 1px solid var(--line); }
@media (max-width: 1024px) { .top, .cols { grid-template-columns: 1fr; gap: 48px; } }
@media (max-width: 760px) { .list li { grid-template-columns: 1fr; gap: 4px; } }
</style>
