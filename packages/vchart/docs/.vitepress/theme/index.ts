import theme from './theme-default'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'vitepress-demo-editor/dist/style.css';
import './custom.css';
import { vuePlugin } from "vitepress-demo-editor";

// 插件的组件，主要是demo组件
// import { registerComponents } from './register-components.js'

export default {
  ...theme,

  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(vuePlugin, {
      defaultDirection: "row", // 默认显示方向
      ms: 30, // 编辑器防抖时间
      handleError(errs) {}, // 错误信息
      onMonacoCreated(monaco) {}, // monaco 创建成功时触发
    });
  }
};



// import { vuePlugin } from "vitepress-demo-editor";
// import "vitepress-demo-editor/dist/style.css";

// export default {
//   // ...otherConfig
//   enhanceApp({ app }) {
//     app.use(vuePlugin, {
//       defaultDirection: "row", // 默认显示方向
//       ms: 30, // 编辑器防抖时间
//       handleError(errs) {}, // 错误信息
//       onMonacoCreated(monaco) {}, // monaco 创建成功时触发
//     });
//   },
// };