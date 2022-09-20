import {
  AccessibilitySharp,
  AirplaneSharp,
  Ban,
  ChatboxSharp,
  CheckmarkSharp,
  CloseSharp,
  FlameSharp,
  HappyOutline,
  MusicalNotesSharp,
  PawSharp,
  SearchSharp
} from '@vicons/ionicons5';
import { addImportMap, vuePlugin } from 'vitepress-demo-editor';
import 'vitepress-demo-editor/dist/style.css';
import promiseuiType from '../../../dist/promiseui/vue-promiseui.d.ts?raw';
import Playground from './playground/index.vue';
// 引入scss
import '../../../promiseui/styles/index.scss';

import { App } from 'vue';
import { emitUILoaded } from './promiseui-utils';
const icons = {
  AirplaneSharp,
  AccessibilitySharp,
  Ban,
  SearchSharp,
  ChatboxSharp,
  PawSharp,
  CheckmarkSharp,
  CloseSharp,
  MusicalNotesSharp,
  FlameSharp,
  HappyOutline
};
let first = true;
export function registerComponents(app: App) {
  addImportMap('@vicons/ionicons5', icons);
  app.component('Playground', Playground);
  app.use(vuePlugin, {
    onMonacoCreated(monaco) {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `
        declare module 'promiseui-vue' { ${promiseuiType} }
      `,
        `promiseui-vue`
      );
    }
  });

  app.mixin({
    async mounted() {
      if (!first) return;
      first = false;
      await import('../../../promiseui').then((promiseUI) => {
        addImportMap('promiseui-vue', promiseUI);
        app.use(promiseUI.default);
        emitUILoaded();
      });
    }
  });
}
