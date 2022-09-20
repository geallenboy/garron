<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import { resolveHeaders, useOutline, useActiveAnchor } from '../composables/outline';

const { page, frontmatter, theme } = useData();

const { hasOutline } = useOutline();

const container = ref();
const marker = ref();

useActiveAnchor(container, marker);

const resolvedHeaders = computed(() => {
  return resolveHeaders(page.value.headers);
});

function handleClick({ target: el }: Event) {
  const id = '#' + (el as HTMLAnchorElement).href!.split('#')[1];
  const heading = document.querySelector(id) as HTMLAnchorElement;
  heading?.focus();
}
</script>

<template>
  <div class="VPDocAsideOutline" :class="{ 'has-outline': hasOutline }" ref="container">
    <div class="content">
      <div class="outline-marker" ref="marker" />

      <div class="outline-title">
        {{ theme.outlineTitle || 'On this page' }}
      </div>

      <nav aria-labelledby="doc-outline-aria-label">
        <span class="visually-hidden" id="doc-outline-aria-label">
          Table of Contents for current page
        </span>

        <ul class="root">
          <li v-for="{ text, link, children, hidden } in resolvedHeaders" v-show="!hidden">
            <a class="outline-link" :href="link" @click="handleClick">
              {{ text }}
            </a>
            <ul v-if="children && frontmatter.outline === 'deep'">
              <li v-for="{ text, link, hidden } in children" v-show="!hidden">
                <a class="outline-link nested" :href="link" @click="handleClick">
                  {{ text }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.VPDocAsideOutline {
  display: none;
}

.VPDocAsideOutline.has-outline {
  display: block;
}

.content {
  position: relative;
  padding-left: 16px;
  font-weight: 500;
  font-size: 13px;
  border-left: 1px solid var(--vp-c-divider-light);
}

.outline-marker {
  position: absolute;
  top: 32px;
  left: -1px;
  z-index: 0;
  width: 1px;
  height: 18px;
  background-color: var(--vp-c-brand);
  opacity: 0;
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s;
}

.outline-title {
  font-weight: 600;
  font-size: 13px;
  line-height: 28px;
  letter-spacing: 0.4px;
}

.outline-link {
  display: block;
  overflow: hidden;
  color: var(--vp-c-text-2);
  line-height: 28px;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.5s;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.outline-link.nested {
  padding-left: 13px;
}

.root {
  position: relative;
  z-index: 1;
}
</style>
