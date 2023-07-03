<template>
  <div></div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    /**
     * ref를 객체에서 사용하기 -> .value 필요없어
     * ref로 선언한 데이터를 반응형 객체의 속성으로 주입하면 자동으로 .value가 unwrapping된다.
     * 그래서 일반 속성을 사용하는 것처럼 state.count 이런 식으로 접근할 수 있다.
     */
    const count = ref(0);
    const state = reactive({
      count, // count: count 키와 값이 같으면 생략 가능
    });
    console.log(count.value, state.count); // 0 0

    /** ref를 배열에서 사용하기 -> .value 필요해 */
    const message = ref('Hello');
    const arr = reactive([message]);
    console.log(message.value, arr[0].value);

    return { count, state };
  },
};
</script>

<style lang="scss" scoped></style>
