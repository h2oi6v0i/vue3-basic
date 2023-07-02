<template>
  <div>
    <h3>반응형 메시지</h3>
    <p>{{ reactiveMessgae }}</p>
    <button @click="addReactiveMessage">Add Message</button>
    <h3>일반 메시지</h3>
    <p>{{ normalMessage }}</p>
    <button @click="addNormalMessage">Add Message</button>
  </div>
</template>

<script>
import { ref, isRef, onMounted, onBeforeMount } from 'vue';

export default {
  setup() {
    console.log('setup()');

    /**
     * 🔍 반응형 API
     */
    const reactiveMessgae = ref('Hello Reactive Message!');
    const addReactiveMessage = () => {
      reactiveMessgae.value = reactiveMessgae.value + '😎';
    };
    /** isRef : 반응형 데이터인지 검사하는 API */
    console.log(isRef(reactiveMessgae)); // true

    /** 변경 안 됨 */
    let normalMessage = 'Hello Normal Message!';
    const addNormalMessage = () => {
      normalMessage = normalMessage + '🫠';
    };
    console.log(isRef(normalMessage)); // false

    /**
     * 🔍 라이프 사이클 훅
     * '라이프 사이클'은 컴포넌트가 생성될 때 거치는 과정이다.
     * '라이프 사이클 훅'은 라이프 사이클 단계에서 실행되는 함수이다.
     */

    /** 컴포넌트가 DOM에 마운트 된 후 */
    onMounted(() => {
      console.log('onMounted');
    });

    /** 컴포넌트가 DOM에 마운트 되기 전 */
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    return {
      reactiveMessgae,
      addReactiveMessage,
      normalMessage,
      addNormalMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
