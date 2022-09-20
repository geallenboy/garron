<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';

const props = defineProps<{
  tag?: string;
  size?: 'medium' | 'big';
  theme?: 'brand' | 'alt' | 'sponsor';
  text: string;
  href?: string;
}>();

const classes = computed(() => [props.size ?? 'medium', props.theme ?? 'brand']);

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href));

const component = computed(() => {
  if (props.tag) {
    return props.tag;
  }

  return props.href ? 'a' : 'button';
});
</script>

<template>
  <component
    :is="component"
    class="VPButton"
    :class="classes"
    :href="href ? withBase(href) : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.VPButton {
  display: inline-block;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.VPButton:active {
  transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}

.VPButton.medium {
  padding: 0 20px;
  font-size: 14px;
  line-height: 38px;
  border-radius: 20px;
}

.VPButton.big {
  padding: 0 24px;
  font-size: 16px;
  line-height: 46px;
  border-radius: 24px;
}

.VPButton.brand {
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-color: var(--vp-button-brand-border);
}

.VPButton.brand:hover {
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
  border-color: var(--vp-button-brand-hover-border);
}

.VPButton.brand:active {
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-active-bg);
  border-color: var(--vp-button-brand-active-border);
}

.VPButton.alt {
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  border-color: var(--vp-button-alt-border);
}

.VPButton.alt:hover {
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
  border-color: var(--vp-button-alt-hover-border);
}

.VPButton.alt:active {
  color: var(--vp-button-alt-active-text);
  background-color: var(--vp-button-alt-active-bg);
  border-color: var(--vp-button-alt-active-border);
}

.VPButton.sponsor {
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
  border-color: var(--vp-button-sponsor-border);
}

.VPButton.sponsor:hover {
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
  border-color: var(--vp-button-sponsor-hover-border);
}

.VPButton.sponsor:active {
  color: var(--vp-button-sponsor-active-text);
  background-color: var(--vp-button-sponsor-active-bg);
  border-color: var(--vp-button-sponsor-active-border);
}
</style>
