<script setup lang="ts">
import { useData } from 'vitepress';
import { useSidebar } from '../composables/sidebar';

const { theme } = useData();
const { hasSidebar } = useSidebar();
</script>

<template>
  <footer v-if="theme.footer" class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p class="message">{{ theme.footer.message }}</p>
      <p class="copyright">{{ theme.footer.copyright }}</p>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider-light);
}

.VPFooter.has-sidebar {
  display: none;
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  text-align: center;
}

.message,
.copyright {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

.message {
  order: 2;
}
.copyright {
  order: 1;
}
</style>
