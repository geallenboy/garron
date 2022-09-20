// import theme from './theme-default'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'vitepress-demo-editor/dist/style.css';
import './custom.css';
import theme from './theme-default';

// 插件的组件，主要是demo组件
// import { registerComponents } from './register-components.js'

export default {
  ...theme,

  enhanceApp({ app }) {
    app.use(ElementPlus);
  }
};
