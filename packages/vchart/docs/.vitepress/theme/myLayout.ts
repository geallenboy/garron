import { defineComponent, h } from 'vue';
import DefaultTheme from './theme-default';

import './custom.css';
const { Layout } = DefaultTheme;
export default defineComponent({
  render() {
    return h(Layout);
  }
});
