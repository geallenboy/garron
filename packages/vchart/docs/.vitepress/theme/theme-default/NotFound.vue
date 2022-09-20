<script setup lang="ts">
import { useData } from 'vitepress';

const { site } = useData();
</script>

<template>
  <div class="NotFound">
    <p class="code">404</p>
    <h1 class="title">PAGE NOT FOUND</h1>
    <div class="divider" />
    <blockquote class="quote">
      But if you don't change your direction, and if you keep looking, you may end up where you are
      heading.
    </blockquote>

    <div class="action">
      <a class="link" :href="site.base" aria-label="go to home"> Take me home </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  font-weight: 600;
  font-size: 64px;
  line-height: 64px;
}

.title {
  padding-top: 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 2px;
}

.divider {
  width: 64px;
  height: 1px;
  margin: 24px auto 18px;
  background-color: var(--vp-c-divider);
}

.quote {
  max-width: 256px;
  margin: 0 auto;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 14px;
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  padding: 3px 16px;
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 14px;
  border: 1px solid var(--vp-c-brand);
  border-radius: 16px;
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand-dark);
  border-color: var(--vp-c-brand-dark);
}
</style>
