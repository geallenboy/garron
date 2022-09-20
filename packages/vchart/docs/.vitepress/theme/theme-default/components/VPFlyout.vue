<script lang="ts" setup>
import { ref } from 'vue';
import { useFlyout } from '../composables/flyout';
import VPIconChevronDown from './icons/VPIconChevronDown.vue';
import VPIconMoreHorizontal from './icons/VPIconMoreHorizontal.vue';
import VPMenu from './VPMenu.vue';

defineProps<{
  icon?: any;
  button?: string;
  label?: string;
  items?: any[];
}>();

const open = ref(false);
const el = ref<HTMLElement>();

useFlyout({ el, onBlur });

function onBlur() {
  open.value = false;
}
</script>

<template>
  <div class="VPFlyout" ref="el" @mouseenter="open = true" @mouseleave="open = false">
    <button
      type="button"
      class="button"
      aria-haspopup="true"
      :aria-expanded="open"
      :aria-label="label"
      @click="open = !open"
    >
      <span v-if="button || icon" class="text">
        <component v-if="icon" :is="icon" class="option-icon" />
        {{ button }}
        <VPIconChevronDown class="text-icon" />
      </span>

      <VPIconMoreHorizontal v-else class="icon" />
    </button>

    <div class="menu">
      <VPMenu :items="items">
        <slot />
      </VPMenu>
    </div>
  </div>
</template>

<style scoped>
.VPFlyout {
  position: relative;
}

.VPFlyout:hover {
  color: var(--vp-c-bland);
  transition: color 0.25s;
}

.VPFlyout:hover .text {
  color: var(--vp-c-text-2);
}

.VPFlyout:hover .icon {
  fill: var(--vp-c-text-2);
}

.VPFlyout.active .text {
  color: var(--vp-c-brand);
}

.VPFlyout.active:hover .text {
  color: var(--vp-c-brand-dark);
}

.VPFlyout:hover .menu,
.button[aria-expanded='true'] + .menu {
  transform: translateY(0);
  visibility: visible;
  opacity: 1;
}

.button {
  display: flex;
  align-items: center;
  height: var(--vp-nav-height-mobile);
  padding: 0 12px;
  color: var(--vp-c-text-1);
  transition: color 0.5s;
}

@media (min-width: 960px) {
  .button {
    height: var(--vp-nav-height-desktop);
  }
}

.text {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
  font-weight: 500;
  font-size: 14px;
  line-height: var(--vp-nav-height-mobile);
  transition: color 0.25s;
}

@media (min-width: 960px) {
  .text {
    line-height: var(--vp-nav-height-desktop);
  }
}

.option-icon {
  width: 16px;
  height: 16px;
  margin-right: 0px;
  fill: currentColor;
}

.text-icon {
  width: 14px;
  height: 14px;
  margin-left: 4px;
  fill: currentColor;
}

.icon {
  width: 20px;
  height: 20px;
  transition: fill 0.25s;
  fill: currentColor;
}

.menu {
  position: absolute;
  top: calc(var(--vp-nav-height-mobile) / 2 + 20px);
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
}

@media (min-width: 960px) {
  .menu {
    top: calc(var(--vp-nav-height-desktop) / 2 + 20px);
  }
}
</style>
