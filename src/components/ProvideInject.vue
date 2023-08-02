<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject Component</div>
      <div class="card-body">
        <button @click="count++">Add Count!</button>
        <p>appMessage: {{ appMessage }}</p>
        <Child />
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, readonly, inject } from 'vue';
import Child from './Child.vue';

export default {
  components: { Child },

  setup() {
    const staticMessage = 'static message';

    const message = ref('message');
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage;
    };

    const count = ref(10);

    /**
     * provide 함수로 데이터 내보내기 (지금은 DeppChild로 보냄)
     * 데이터를 받은 컴포넌트에서는 값을 변경할 수 없도록 하려면 readonly() 함수 사용
     */
    provide('message', { message: readonly(message), updateMessage });
    provide('count', count);
    // provide('static-message', staticMessage);

    /** App level */
    const appMessage = inject('app-message');

    return { count, appMessage };
  },
};
</script>

<style lang="scss" scoped></style>
