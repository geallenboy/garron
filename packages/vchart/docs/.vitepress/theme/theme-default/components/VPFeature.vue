<script setup lang="ts">
defineProps<{
  icon?: string;
  title: string;
  details: string;
}>();
</script>

<template>
  <article class="VPFeature">
    <div v-if="icon" class="icon">{{ icon }}</div>
    <h2 class="title">{{ title }}</h2>
    <p class="details">{{ details }}</p>
  </article>
</template>

<style scoped>
.VPFeature {
  height: 100%;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  font-size: 24px;
  background-color: var(--vp-c-gray-light-4);
  border-radius: 6px;
}

.dark .icon {
  background-color: var(--vp-c-bg);
}

.title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.details {
  padding-top: 8px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
</style>
