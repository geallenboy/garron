import theme from './theme-default'
import { h } from 'vue'
// import ElementPlus from 'element-plus';
import {AreaChart} from "../../../src"
import 'vitepress-demo-editor/dist/style.css';
import './custom.css';
import { vuePlugin } from "vitepress-demo-editor";
import myLayout from './myLayout'
// import 'element-plus/dist/index.css';

export default {
  ...theme,
  Layout: () => {
    return h(myLayout)
  },
  enhanceApp({ app }) {
   
    app.use(AreaChart);
    app.use(vuePlugin, {


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