<script lang="ts" setup>
import VPMenuLink from './VPMenuLink.vue';
import VPMenuGroup from './VPMenuGroup.vue';

defineProps<{
  items?: any[];
}>();
</script>

<template>
  <div class="VPMenu">
    <div v-if="items" class="items">
      <template v-for="item in items" :key="item.text">
        <VPMenuLink v-if="'link' in item" :item="item" />
        <VPMenuGroup v-else :text="item.text" :items="item.items" />
      </template>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.VPMenu {
  min-width: 128px;
  padding: 12px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3);
  transition: background-color 0.5s;
}

.dark .VPMenu {
  box-shadow: var(--vp-shadow-2);
}

.VPMenu :deep(.group) {
  margin: 0 -12px;
  padding: 0 12px 12px;
}

.VPMenu :deep(.group + .group) {
  padding: 11px 12px 12px;
  border-top: 1px solid var(--vp-c-divider-light);
}

.VPMenu :deep(.group:last-child) {
  padding-bottom: 0;
}

.VPMenu :deep(.group + .item) {
  padding: 11px 16px 0;
  border-top: 1px solid var(--vp-c-divider-light);
}

.VPMenu :deep(.item) {
  padding: 0 16px;
  white-space: nowrap;
}

.VPMenu :deep(.label) {
  flex-grow: 1;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  transition: color 0.5s;
}

.VPMenu :deep(.action) {
  padding-left: 24px;
}
</style>
