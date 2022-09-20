<script setup lang="ts">
import VPIconHeart from './icons/VPIconHeart.vue';
import VPButton from './VPButton.vue';
import VPSponsors from './VPSponsors.vue';

export interface Sponsors {
  tier: string;
  size?: 'medium' | 'big';
  items: Sponsor[];
}

export interface Sponsor {
  name: string;
  img: string;
  url: string;
}

defineProps<{
  message?: string;
  actionText?: string;
  actionLink?: string;
  data: Sponsors[];
}>();
</script>

<template>
  <section class="VPHomeSponsors">
    <div class="container">
      <div class="header">
        <div class="love"><VPIconHeart class="icon" /></div>
        <h2 v-if="message" class="message">{{ message }}</h2>
      </div>

      <div class="sponsors">
        <VPSponsors :data="data" />
      </div>

      <div v-if="actionLink" class="action">
        <VPButton theme="sponsor" :text="actionText ?? 'Become a sponsor'" :href="actionLink" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.VPHomeSponsors {
  padding: 88px 24px 96px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider-light);
}

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.love {
  width: 28px;
  height: 28px;
  margin: 0 auto;
  color: var(--vp-c-text-3);
}

.icon {
  width: 28px;
  height: 28px;
  fill: currentColor;
}

.message {
  max-width: 320px;
  margin: 0 auto;
  padding-top: 10px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}

.sponsors {
  padding-top: 32px;
}

.action {
  padding-top: 40px;
  text-align: center;
}
</style>
