<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme';
import VPNavScreenMenuGroupLink from './VPNavScreenMenuGroupLink.vue';

defineProps<{
  text?: string;
  items: DefaultTheme.NavItemWithLink[];
}>();
</script>

<template>
  <div class="VPNavScreenMenuGroupSection">
    <p v-if="text" class="title">{{ text }}</p>
    <VPNavScreenMenuGroupLink
      v-for="item in items"
      :key="item.text"
      :text="item.text"
      :link="item.link"
    />
  </div>
</template>

<style scoped>
.VPNavScreenMenuGroupSection {
  display: block;
}

.title {
  color: var(--vp-c-text-2);
  font-weight: 700;
  font-size: 13px;
  line-height: 32px;
  transition: color 0.25s;
}
</style>
