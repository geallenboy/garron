import { useData } from 'vitepress';
import { computed } from 'vue';
import { getFlatSideBarLinks, getSidebar } from '../support/sidebar';
import { isActive } from '../support/utils';
export function usePrevNext() {
  const { page, theme } = useData();
  return computed(() => {
    const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index = candidates.findIndex((link) => {
      return isActive(page.value.relativePath, link.link);
    });
    return {
      prev: candidates[index - 1],
      next: candidates[index + 1]
    };
  });
}
