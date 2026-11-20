<template>
  <a class="skip" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <NuxtPage />
  </main>
  <SiteFooter />
</template>

<style>
.skip { position: absolute; left: -999px; top: 8px; background: var(--charcoal); color: var(--paper); padding: 8px 16px; z-index: 100; border-radius: 8px; }
.skip:focus { left: 8px; }
</style>
