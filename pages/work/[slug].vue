<script setup lang="ts">
import { projects } from '~/data/site'
const route = useRoute()
const idx = projects.findIndex(p => p.slug === route.params.slug)
if (idx < 0) throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
const p = projects[idx]
const next = projects[(idx + 1) % projects.length]
useHead({ title: `${p.title} — Aslam` })
const facts = [['Role', p.role], ['Client', p.client], ['Year', p.year], ['Category', p.category]]
const toc = [['overview', 'Overview'], ['process', 'Process'], ['result', 'Result'], ['learnings', 'Learnings']]
const pad = (n: number) => String(n).padStart(2, '0')
</script>

<template>
  <article>
    <header class="container top">
      <div class="top__bar">
        <NuxtLink to="/work" class="mono link muted">All work</NuxtLink>
        <span class="mono muted">{{ pad(idx + 1) }} / {{ pad(projects.length) }}</span>
      </div>
      <h1 class="display top__t">{{ p.title }}</h1>
      <figure v-if="p.cover" class="cover" v-reveal>
        <img :src="p.cover" :alt="`${p.title} cover`" width="1600" height="900">
      </figure>
      <dl class="facts" :class="{ 'facts--card': !p.cover }" v-reveal>
        <div v-for="[k, v] in facts" :key="k"><dt class="mono">{{ k }}</dt><dd :class="{ display: !p.cover && k === 'Client' }">{{ v }}</dd></div>
      </dl>
    </header>

    <div class="container body">
      <nav class="rail" aria-label="On this page">
        <ul>
          <li v-for="([id, label], i) in toc" :key="id"><a :href="`#${id}`" class="link"><span class="mono muted">{{ pad(i + 1) }}</span> {{ label }}</a></li>
        </ul>
      </nav>

      <div class="main">
        <section id="overview" class="blk">
          <h2 class="mono muted blk__h">Overview</h2>
          <div class="ov" v-reveal>
            <p class="mono muted">The problem</p>
            <p class="display ov__t">{{ p.overview.problem }}</p>
          </div>
          <div class="ov" v-reveal="80">
            <p class="mono muted">The goal</p>
            <p class="display ov__t">{{ p.overview.goal }}</p>
          </div>
        </section>

        <section id="process" class="blk">
          <h2 class="mono muted blk__h">Process</h2>
          <ol class="steps">
            <li v-for="(s, i) in p.process" :key="i" v-reveal="i * 70">
              <span class="display steps__n">{{ pad(i + 1) }}</span>
              <p>{{ s }}</p>
            </li>
          </ol>
          <div v-if="p.shots?.length" class="shots">
            <img v-for="s in p.shots" :key="s.src" :src="s.src" :alt="s.alt" loading="lazy">
          </div>
        </section>

        <section id="result" class="blk">
          <h2 class="mono muted blk__h">Result</h2>
          <ul class="res">
            <li v-for="r in p.results" :key="r.label" v-reveal>
              <span class="display res__v">{{ r.value }}</span>
              <span class="mono">{{ r.label }}</span>
            </li>
          </ul>
        </section>

        <section id="learnings" class="blk">
          <h2 class="mono muted blk__h">Learnings</h2>
          <ul class="learn">
            <li v-for="(l, i) in p.learnings" :key="i" v-reveal="i * 70">
              <span class="mono muted">{{ pad(i + 1) }}</span>
              <p class="h-sub">{{ l }}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <NuxtLink :to="`/work/${next.slug}`" class="next">
      <div class="container next__in">
        <span class="mono">Next project</span>
        <span class="display next__t">{{ next.title }}</span>
        <span class="next__arrow" aria-hidden="true">↗</span>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.top { padding-top: 40px; }
.top__bar { display: flex; justify-content: space-between; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.top__t { font-size: clamp(64px, 13vw, 220px); line-height: .9; margin: clamp(40px, 6vw, 88px) 0 clamp(32px, 5vw, 64px); overflow-wrap: break-word; min-width: 0; }
.facts { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; padding: 20px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.facts dt { color: var(--muted); }
.facts dd { font-size: 18px; margin-top: 8px; }
.cover { margin: 0 0 32px; }
.cover img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 14px; border: 1px solid var(--line); }
.facts--card { grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 32px 24px; align-items: end; padding: clamp(28px, 4vw, 56px); border: 0; border-radius: 14px; background: var(--accent); color: var(--on-accent); }
.facts--card dt { color: var(--on-accent); opacity: .75; }
.facts--card > div { grid-column: span 4; }
.facts--card > div:nth-child(2) { grid-column: 1 / -1; order: -1; }
.facts--card > div:nth-child(2) dd { font-size: clamp(40px, 7vw, 112px); line-height: .95; margin-top: 12px; overflow-wrap: break-word; min-width: 0; }
.facts--card > div:nth-child(2) dt { font-size: 13px; }

.body { display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 64px; padding-top: 96px; padding-bottom: 112px; align-items: start; }
.rail { position: sticky; top: 100px; }
.rail ul { display: grid; gap: 16px; }
.rail a { display: inline-flex; gap: 12px; align-items: baseline; font-size: 15px; }
.main { max-width: 920px; }
.blk { scroll-margin-top: 90px; padding-bottom: 96px; }
.blk:last-child { padding-bottom: 0; }
.blk__h { padding-bottom: 16px; border-bottom: 1px solid var(--line); margin-bottom: 40px; }

.ov + .ov { margin-top: 48px; }
.ov__t { font-size: clamp(28px, 3.4vw, 46px); line-height: 1.12; margin-top: 12px; max-width: 28ch; text-wrap: pretty; }

.steps { position: relative; display: grid; gap: 0; }
.steps li { display: grid; grid-template-columns: 88px minmax(0, 1fr); gap: 24px; padding: 28px 0; border-top: 1px solid var(--line); align-items: baseline; }
.steps li:first-child { border-top: 0; padding-top: 0; }
.steps__n { font-size: 48px; line-height: 1; }
.steps p { font-size: 19px; max-width: 52ch; }
.shots { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 40px; }
.shots img { width: 100%; border-radius: 14px; border: 1px solid var(--line); }

.res { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1px; background: var(--charcoal); border-radius: 14px; overflow: hidden; }
.res li { display: flex; flex-direction: column; gap: 16px; justify-content: space-between; min-height: 220px; padding: 32px; background: var(--charcoal); color: var(--paper); }
.res li + li { box-shadow: -1px 0 0 color-mix(in srgb, var(--paper) 25%, transparent); }
.res__v { font-size: clamp(56px, 8vw, 112px); line-height: .95; overflow-wrap: break-word; min-width: 0; }

.learn li { display: grid; grid-template-columns: 88px minmax(0, 1fr); gap: 24px; padding: 28px 0; border-top: 1px solid var(--line); align-items: baseline; }
.learn li:last-child { border-bottom: 1px solid var(--line); }
.learn p { max-width: 40ch; }

.next { display: block; background: var(--accent); color: var(--on-accent); padding: 72px 0; transition: background-color .3s, color .3s; }
.next:hover, .next:focus-visible { background: var(--charcoal); color: var(--paper); }
.next__in { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 12px 24px; align-items: end; }
.next__in .mono { grid-column: 1 / -1; }
.next__t { font-size: clamp(40px, 8vw, 120px); line-height: 1; min-width: 0; overflow-wrap: break-word; }
.next__arrow { font-size: clamp(32px, 5vw, 72px); line-height: 1; transition: transform .35s var(--ease); }
.next:hover .next__arrow, .next:focus-visible .next__arrow { transform: translate(6px, -6px); }

.next:active, .rail a:active { opacity: .7; }
@media (max-width: 1024px) {
  .body { grid-template-columns: minmax(0, 1fr); gap: 0; padding-top: 72px; }
  .rail { display: none; }
  .facts:not(.facts--card) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .facts--card > div { grid-column: span 6; }
  .steps li, .learn li { grid-template-columns: 56px minmax(0, 1fr); gap: 16px; }
  .steps__n { font-size: 36px; }
  .shots { grid-template-columns: minmax(0, 1fr); }
  .res li { min-height: 160px; padding: 24px; }
}
@media (prefers-reduced-motion: reduce) { .next__arrow { transition: none; } }
</style>
