<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme';
import VPButton from './VPButton.vue';
import VPImage from './VPImage.vue';

export interface HeroAction {
  theme?: 'brand' | 'alt';
  text: string;
  link: string;
}

defineProps<{
  name?: string;
  text: string;
  tagline?: string;
  image?: DefaultTheme.ThemeableImage;
  actions?: HeroAction[];
}>();
</script>

<template>
  <div class="VPHero" :class="{ 'has-image': image }">
    <div class="container">
      <div class="main">
        <h1 v-if="name" class="name">
          <span class="clip">{{ name }}</span>
        </h1>
        <p v-if="text" class="text">{{ text }}</p>
        <p v-if="tagline" class="tagline">{{ tagline }}</p>

        <div v-if="actions" class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <VPButton
              tag="a"
              size="medium"
              :theme="action.theme"
              :text="action.text"
              :href="action.link"
            />
          </div>
        </div>
      </div>

      <div v-if="image" class="image">
        <div class="image-container">
          <div class="image-bg" />
          <VPImage class="image-src" :image="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHero {
  margin-top: calc(var(--vp-nav-height) * -1);
  padding: calc(var(--vp-nav-height) + 48px) 24px 48px;
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + 80px) 48px 64px;
  }
}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + 80px) 64px 64px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  margin: 0 auto;
}

@media (min-width: 960px) {
  .container {
    flex-direction: row;
  }
}

.main {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  flex-shrink: 0;
  order: 2;
}

.VPHero.has-image .container {
  text-align: center;
}

@media (min-width: 960px) {
  .VPHero.has-image .container {
    text-align: left;
  }
}

@media (min-width: 960px) {
  .main {
    order: 1;
    width: calc((100% / 3) * 2);
  }

  .VPHero.has-image .main {
    max-width: 592px;
  }
}

.name,
.text {
  max-width: 392px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.4px;
  white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    font-size: 48px;
    line-height: 56px;
  }
}

@media (min-width: 960px) {
  .name,
  .text {
    font-size: 56px;
    line-height: 64px;
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }
}

.tagline {
  max-width: 392px;
  padding-top: 8px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-wrap;
}

.VPHero.has-image .tagline {
  margin: 0 auto;
}

@media (min-width: 640px) {
  .tagline {
    max-width: 576px;
    padding-top: 12px;
    font-size: 20px;
    line-height: 32px;
  }
}

@media (min-width: 960px) {
  .tagline {
    font-size: 24px;
    line-height: 36px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

.VPHero.has-image .actions {
  justify-content: center;
}

@media (min-width: 640px) {
  .actions {
    padding-top: 32px;
  }
}

@media (min-width: 960px) {
  .VPHero.has-image .actions {
    justify-content: flex-start;
  }
}

.action {
  flex-shrink: 0;
  padding: 6px;
}

.image {
  order: 1;
  margin: -76px -24px -48px;
}

@media (min-width: 640px) {
  .image {
    margin: -108px -24px -48px;
  }
}

@media (min-width: 960px) {
  .image {
    flex-grow: 1;
    order: 2;
    min-height: 100%;
    margin: 0;
  }
}

.image-container {
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .image-container {
    width: 392px;
    height: 392px;
  }
}

@media (min-width: 960px) {
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform: translate(-32px, -32px);
  }
}

.image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 192px;
  height: 192px;
  background-image: var(--vp-home-hero-image-background-image);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: var(--vp-home-hero-image-filter);
}

@media (min-width: 640px) {
  .image-bg {
    width: 256px;
    height: 256px;
  }
}

@media (min-width: 960px) {
  .image-bg {
    width: 320px;
    height: 320px;
  }
}

:deep(.image-src) {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 192px;
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  :deep(.image-src) {
    max-width: 256px;
  }
}

@media (min-width: 960px) {
  :deep(.image-src) {
    max-width: 320px;
  }
}
</style>
