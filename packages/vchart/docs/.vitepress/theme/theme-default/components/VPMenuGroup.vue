<script lang="ts" setup>
import VPMenuLink from './VPMenuLink.vue';

defineProps<{
  text?: string;
  items: any[];
}>();
</script>

<template>
  <div class="VPMenuGroup">
    <p v-if="text" class="title">{{ text }}</p>

    <template v-for="item in items">
      <VPMenuLink v-if="'link' in item" :item="item" />
    </template>
  </div>
</template>

<style scoped>
.VPMenuGroup {
  margin: 12px -12px 0;
  padding: 12px 12px 0;
  border-top: 1px solid var(--vp-c-divider-light);
}

.VPMenuGroup:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}

.VPMenuGroup + .VPMenuGroup {
  margin-top: 12px;
  border-top: 1px solid var(--vp-c-divider-light);
}

.title {
  padding: 0 12px;
  color: var(--vp-c-text-2);
  font-weight: 600;
  font-size: 14px;
  line-height: 32px;
  transition: color 0.25s;
}
</style>
