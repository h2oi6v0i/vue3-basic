<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
      <div>staticMessage: {{ staticMessage }}</div>
      <div>message: {{ message }}</div>
      <div>count: {{ count }}</div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    /**
     * Provide-Inject로 받은 데이터 반응성 유지하고 있음
     * 이러한 반응형 데이터에 대한 변경 사항은 Provider 내부에서 하는 것이 권장됨
     * inject 함수는 값이 안 넘어왔을 때를 대비하여 두 번째 파라미터로 default 값 설정
     */
    const staticMessage = inject('static-message', 'default message');

    const { message, updateMessage } = inject('message');
    updateMessage('!');
    // message.value = message.value + 'readonly 때문에 안 될걸?';

    const count = inject('count');

    return { staticMessage, message, count };
  },
};
</script>

<style lang="scss" scoped></style>
