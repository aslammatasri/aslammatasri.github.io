<script setup lang="ts">
import { profile, projects, showServices } from '~/data/site'
useHead({ title: `${profile.shortName} — ${profile.role}` })
import { brandIcons } from '~/data/icons'
const techs = [...profile.skills, ...profile.tools].map(name => ({ name, icon: brandIcons[name.toLowerCase()] }))
</script>

<template>
  <div>
    <section class="container hero">
      <div class="hero__meta mono">
        <span>{{ profile.role }}</span>
        <span>{{ profile.location }}</span>
        <LiveClock :tz="profile.timezone" :city="profile.city" />
      </div>
      <h1 class="display hero__title">
        <span class="hero__l" style="--d: 0ms">Reliable web</span>
        <span class="hero__l" style="--d: 90ms">systems, built</span>
        <span class="hero__l" style="--d: 180ms"><em>end to end.</em></span>
      </h1>
      <div class="hero__foot">
        <div class="hero__copy" v-reveal="300">
          <p class="lede">{{ profile.statement }}</p>
          <div class="hero__cta">
            <NuxtLink to="/work" class="btn btn--solid">See selected work ↓</NuxtLink>
            <NuxtLink to="/contact" class="btn">Get in touch</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <div class="container" style="padding-top: 24px">
      <SectionHeader index="01" label="My stack" />
    </div>
    <section class="marquee" aria-label="My stack" v-reveal>
      <div class="marquee__track">
        <ul v-for="n in 2" :key="n" class="marquee__set" :aria-hidden="n === 2">
          <li v-for="t in techs" :key="t.name" class="chip">
            <svg v-if="t.icon" :viewBox="`0 0 ${t.icon.w} ${t.icon.h}`" aria-hidden="true"><path :d="t.icon.d" fill="currentColor" /></svg>
            <span>{{ t.name }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="container section" id="work">
      <SectionHeader index="02" label="Selected work" />
      <div v-reveal>
        <ProjectRow v-for="(p, i) in projects" :key="p.slug" :project="p" :index="i" />
      </div>
      <div class="more"><NuxtLink to="/work" class="btn">All projects →</NuxtLink></div>
    </section>

    <section v-if="showServices" class="container section" style="padding-top: 0">
      <SectionHeader index="03" label="What I do" />
      <ul class="svc">
        <li v-for="(s, i) in profile.services" :key="s.title" v-reveal="i * 70">
          <span class="mono svc__n">0{{ i + 1 }}</span>
          <h3 class="h-sub">{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </li>
      </ul>
    </section>

    <section class="container section" style="padding-top: 0">
      <SectionHeader :index="showServices ? '04' : '03'" label="Experience" />
      <div class="exp">
        <h2 class="display h-section" v-reveal>Clean code.<br><em>Real systems.</em></h2>
        <div v-reveal="100">
          <p class="lede">{{ profile.bio[0] }}</p>
          <ul class="tl">
            <li v-for="e in profile.experience" :key="e.years">
              <span class="mono">{{ e.years }}</span>
              <span>{{ e.role }}<span class="muted"> · {{ e.place }}</span></span>
            </li>
          </ul>
          <NuxtLink to="/about" class="btn" style="margin-top: 32px">More about me →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero { padding-top: 56px; padding-bottom: 96px; }
.hero__meta { display: flex; flex-wrap: wrap; gap: 8px 32px; color: var(--muted); padding-bottom: 20px; border-bottom: 1px solid var(--line); margin-bottom: clamp(40px, 7vw, 96px); }
.hero__title { font-size: clamp(54px, 11.5vw, 188px); line-height: .94; }
.hero__l { display: block; overflow: hidden; padding-bottom: .08em; margin-bottom: -.08em; }
.hero__l > * , .hero__l { animation: none; }
.hero__l { animation: rise .9s var(--ease) both; animation-delay: var(--d); }
@keyframes rise { from { transform: translateY(40%); opacity: 0; } to { transform: none; opacity: 1; } }
.hero__foot { margin-top: clamp(48px, 7vw, 96px); }
.hero__cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.marquee { overflow: hidden; padding: 8px 0; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.marquee__track { display: flex; width: max-content; animation: slide 45s linear infinite; }
.marquee:hover .marquee__track { animation-play-state: paused; }
.marquee__set { display: flex; flex-shrink: 0; }
.marquee__set { gap: 72px; padding-right: 72px; }
.chip { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 14px; white-space: nowrap; font-size: 14px; color: var(--muted); }
.chip svg { height: 44px; width: 44px; color: var(--ink); flex-shrink: 0; }
@keyframes slide { to { transform: translateX(-50%); } }
.more { margin-top: 40px; }
.svc { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
.svc li { display: flex; flex-direction: column; gap: 12px; padding-top: 20px; border-top: 1px solid var(--ink); }
.svc__n { color: var(--accent); }
.exp { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: start; }
.tl { margin-top: 32px; }
.tl li { display: grid; grid-template-columns: 180px 1fr; gap: 16px; padding: 14px 0; border-top: 1px solid var(--line); font-size: 15px; }
.tl .mono { color: var(--muted); }
@media (max-width: 1024px) {
  .exp { grid-template-columns: 1fr; }
  .svc { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) { .svc { grid-template-columns: 1fr; } .tl li { grid-template-columns: 1fr; gap: 2px; } }
@media (prefers-reduced-motion: reduce) { .hero__l { animation: none; } .marquee__track { animation: none; flex-wrap: wrap; width: auto; } .marquee { mask-image: none; } .marquee__set[aria-hidden="true"] { display: none; } .marquee__set { flex-wrap: wrap; } }
</style>
