<script lang="ts" setup>
import { useData } from 'vitepress';
import VPSwitchAppearance from './VPSwitchAppearance.vue';

const { site } = useData();
</script>

<template>
  <div v-if="site.appearance" class="VPNavScreenAppearance">
    <p class="text">Appearance</p>
    <VPSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavScreenAppearance {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px 12px 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  transition: background-color 0.5s;
}

.text {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  transition: color 0.5s;
}
</style>
