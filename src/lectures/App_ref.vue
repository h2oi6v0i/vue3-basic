<template>
  <div>
    <p>{{ message }}</p>
    <button @click="addMessage">Add Click</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    /**
     * 🔍 reactive
     * reactive 함수는 객체나 배열과 같은 reference 타입의 상태를 반응형으로 유지하는 객체를 생성하는 함수입니다.
     * 그렇다면 reactive 함수로 primitive 타입을 다룰 순 없을까?
     * -> 아래 코드처럼 이미 약속된 속성 안에 선언해주면 됨 -> 결과적으로 ref 쓰면 됨!
     *
     * 🔍 ref
     * ref 함수는 변이 가능한 객체를 반환한다.
     */

    // let message = reactive('Hello, Vue!');
    // const addMessage = () => {
    //   message = message + '🍀';
    // };

    // let message = reactive({
    //   value: 'Hello, Vue!',
    // });

    let message = ref('Hello, Vue!');
    const addMessage = () => {
      message.value = message.value + '🍀';
    };

    return { message, addMessage };
  },
};
</script>

<style lang="scss" scoped></style>
