<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue3');
    const reverseMessage = ref('');

    // 방법 1️⃣
    // watch(
    //   message,
    //   (newValue) => {
    //     reverseMessage.value = newValue.split('').reverse().join(''); // 변경된 데이터 거꾸로 출력하기
    //   },
    //   {
    //     immediate: true, // 즉시 실행
    //   }
    // );

    // 방법 2️⃣
    // const reverseFunction = (newValue) => {
    //   reverseMessage.value = newValue.split('').reverse().join(''); // 변경된 데이터 거꾸로 출력하기
    // };

    // watch(message, reverseFunction);
    // reverseFunction(message.value); // 이렇게 선언함으로써 immediate 쓰는 대신 최초에 한 번 실행함

    // 방법 3️⃣
    const reverseFunction = () => {
      reverseMessage.value = message.value.split('').reverse().join(''); // 변경된 데이터 거꾸로 출력하기
    };

    watch(message, reverseFunction);
    reverseFunction(); // 이렇게 선언함으로써 immediate 쓰는 대신 최초에 한 번 실행함

    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped></style>
