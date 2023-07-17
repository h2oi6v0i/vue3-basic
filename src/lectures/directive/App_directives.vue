<template>
  <div>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>

    <!-- v-pre : 표현식을 허용하지 않는다. -->
    <p v-pre>{{ msg 이곳은 컴파일되지 않습니다. }}</p>

    <!-- v-once : 한 번만 렌더링하기 때문에 업데이트 성능을 최적화 할 수 있다. -->
    <p v-once>{{ msg }} !!</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('안녕하세요?');
    const htmlStr = ref('<strong>안녕!!!</strong>');

    return { msg, htmlStr };
  },
};
</script>

<style lang="scss" scoped></style>
