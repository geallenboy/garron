import { useData } from 'vitepress';
import { computed } from 'vue';
export function useEditLink() {
  const { theme, page } = useData();
  return computed(() => {
    const { text = 'Edit this page', pattern } = theme.value.editLink || {};
    const { relativePath } = page.value;
    const url = pattern.replace(/:path/g, relativePath);
    return { url, text };
  });
}
