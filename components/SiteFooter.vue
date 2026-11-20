<script setup lang="ts">
import { profile } from '~/data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <div class="container">
      <p class="mono ftr__eyebrow">Next step</p>
      <h2 class="display ftr__title">Let's build something <em>dependable.</em></h2>
      <a :href="`mailto:${profile.email}`" class="ftr__mail link">{{ profile.email }}</a>
      <div class="ftr__row">
        <p class="mono">© {{ year }} {{ profile.name }}</p>
        <ul class="ftr__social">
          <li v-for="s in profile.socials" :key="s.label"><a :href="s.href" class="mono link" rel="noopener" target="_blank">{{ s.label }} ↗</a></li>
          <li><LiveClock :tz="profile.timezone" :city="profile.city" /></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ftr { background: var(--charcoal); color: var(--paper); padding: 112px 0 32px; margin-top: 0; }
.ftr__eyebrow { opacity: .6; margin-bottom: 24px; }
.ftr__title { font-size: clamp(48px, 9vw, 144px); max-width: 14ch; }
.ftr__title em { color: var(--paper); opacity: .7; }
.ftr__mail { display: inline-block; margin-top: 48px; font-size: clamp(20px, 2.4vw, 32px); }
.ftr__row { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px 24px; margin-top: 96px; padding-top: 24px; border-top: 1px solid color-mix(in srgb, var(--paper) 22%, transparent); }
.ftr__row .mono { opacity: .75; }
.ftr__social { display: flex; flex-wrap: wrap; gap: 24px; }
</style>
