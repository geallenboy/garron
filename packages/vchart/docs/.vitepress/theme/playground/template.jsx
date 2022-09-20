import { Button } from 'promiseui-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const msg = ref('hello jsx!');
    return () => <Button>{msg.value}</Button>;
  }
});
