<template>
  <div>
    <h3>속성 바인딩</h3>
    <div :title="dynamicTitle">마우스를 올려보세요🖱</div>
    <input type="text" value="하이" :disabled="isInputDisabled" />
    <input v-bind="attrs" />

    <h3>JavaScript</h3>
    <div>{{ message.split('').reverse().join('') }}</div>
    <div>{{ isInputDisabled ? 'YES' : 'NO' }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('안녕하세요!');
    const dynamicTitle = ref('🍀');
    const isInputDisabled = ref(true);

    /** 다중 속성 바인딩 */
    const attrs = ref({
      type: 'password',
      value: '12345678',
      disabled: false,
    });

    return {
      message,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
