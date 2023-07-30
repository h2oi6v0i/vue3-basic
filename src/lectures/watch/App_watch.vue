<template>
  <div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('');

    /**
     * watch
     * - 특정 반응형 데이터가 변경되었을 때 다른 DOM을 조작하거나 API를 호출해서 다른 반응형 데이터 상태를 변경할 때 사용한다.
     * - ref, reactive, computed, getter 함수, array 등 다양한 타입을 매개변수로 받을 수 있다.
     */
    watch(message, (newValue, oldValue) => {
      console.log('new value : ', newValue);
      console.log('old value : ', oldValue);
    });

    return { message };
  },
};
</script>

<style lang="scss" scoped></style>
