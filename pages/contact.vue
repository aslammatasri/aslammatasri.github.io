<script setup lang="ts">
import { profile } from '~/data/site'
useHead({ title: 'Contact — Aslam' })
const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)
// Static demo: opens the visitor's mail client. Swap for a real form API if needed.
function submit() {
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry')}&body=${body}`
  sent.value = true
}
</script>

<template>
  <div class="container section" style="padding-top: 64px">
    <p class="mono muted">Contact</p>
    <h1 class="display h-page" style="margin-top: 16px">Say <em>hello.</em></h1>
    <p class="mono avail" role="status"><span class="dot"></span> {{ profile.availability }}</p>

    <div class="wrap">
      <form class="form" @submit.prevent="submit">
        <label class="mono" for="n">Name</label>
        <input id="n" v-model="form.name" required autocomplete="name">
        <label class="mono" for="e">Email</label>
        <input id="e" v-model="form.email" type="email" required autocomplete="email">
        <label class="mono" for="m">Message</label>
        <textarea id="m" v-model="form.message" rows="6" required></textarea>
        <button class="btn btn--solid" type="submit" style="align-self: flex-start">Send message ↗</button>
        <p v-if="sent" class="mono" role="status">Opening your mail app…</p>
      </form>

      <div class="side">
        <p class="mono muted">Email</p>
        <a :href="`mailto:${profile.email}`" class="h-sub link" style="align-self: flex-start">{{ profile.email }}</a>
        <p class="mono muted" style="margin-top: 32px">Elsewhere</p>
        <ul>
          <li v-for="s in profile.socials" :key="s.label"><a :href="s.href" class="h-sub link" target="_blank" rel="noopener">{{ s.label }} ↗</a></li>
        </ul>
        <p class="mono muted" style="margin-top: 32px">Based in</p>
        <p>{{ profile.location }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avail { display: flex; align-items: center; gap: 12px; margin: 32px 0 72px; color: var(--muted); }
.wrap { display: grid; grid-template-columns: 1.5fr 1fr; gap: 96px; }
.form { display: flex; flex-direction: column; gap: 8px; }
.form label { color: var(--muted); }
.form input, .form textarea {
  font: inherit; color: var(--ink); background: var(--paper-2); border: 1px solid var(--line);
  border-radius: 12px; padding: 14px 16px; margin-bottom: 16px; transition: border-color .2s, background .2s;
}
.form input:hover, .form textarea:hover { border-color: var(--ink); }
.form input:focus, .form textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; border-color: transparent; }
.side { display: flex; flex-direction: column; gap: 8px; }
.side ul { display: grid; gap: 8px; }
@media (max-width: 1024px) { .wrap { grid-template-columns: 1fr; gap: 64px; } }
</style>
