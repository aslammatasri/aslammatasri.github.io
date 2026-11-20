<script setup lang="ts">
import { profile, showServices } from '~/data/site'
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  ...(showServices ? [{ to: '/services', label: 'Services' }] : [])
]
</script>

<template>
  <header class="hdr">
    <div class="container hdr__in">
      <NuxtLink to="/" class="hdr__logo" aria-label="Home">
        <span class="hdr__mark" aria-hidden="true">A</span>
        <span class="hdr__name">{{ profile.shortName }}</span>
        <span class="mono hdr__status"><span class="dot"></span> Available</span>
      </NuxtLink>

      <button class="btn btn--sm hdr__menu" :aria-expanded="open" aria-controls="nav" @click="open = !open">
        {{ open ? 'Close' : 'Menu' }}
      </button>

      <nav id="nav" class="hdr__nav" :class="{ 'is-open': open }" aria-label="Main">
        <ul>
          <li v-for="l in links" :key="l.to"><NuxtLink :to="l.to" class="link hdr__link">{{ l.label }}</NuxtLink></li>
        </ul>
        <NuxtLink to="/contact" class="btn btn--sm btn--solid">Contact ↗</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.hdr { position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--paper) 82%, transparent); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--line); }
.hdr__in { display: flex; align-items: center; justify-content: space-between; height: 68px; }
.hdr__logo { display: flex; align-items: center; gap: 12px; }
.hdr__mark { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 9px; background: var(--ink); color: var(--paper); font: 400 22px/1 var(--font-display); }
.hdr__name { font-weight: 550; letter-spacing: -.01em; }
.hdr__status { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); padding-left: 12px; margin-left: 4px; border-left: 1px solid var(--line); }
.hdr__nav { display: flex; align-items: center; gap: 36px; }
.hdr__nav ul { display: flex; gap: 32px; }
.hdr__link { font-size: 15px; }
.hdr__menu { display: none; }
@media (max-width: 760px) {
  .hdr__status { display: none; }
  .hdr__menu { display: inline-flex; }
  .hdr__nav {
    display: none; position: absolute; top: 100%; left: 0; right: 0;
    flex-direction: column; align-items: flex-start; gap: 24px;
    padding: 24px var(--pad) 32px; background: var(--paper); border-bottom: 1px solid var(--line);
  }
  .hdr__nav.is-open { display: flex; }
  .hdr__nav ul { flex-direction: column; gap: 16px; }
  .hdr__link { font-size: 24px; font-family: var(--font-display); }
}
</style>
