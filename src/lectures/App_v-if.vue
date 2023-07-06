<template>
  <div>
    <h2 v-if="visible">Hello Vue3</h2>
    <h2 v-else>false 입니다.</h2>
    <button @click="visible = !visible">토글토글</button>

    <hr />

    <h2 v-if="type === 'A'">A</h2>
    <h2 v-else-if="type === 'B'">B</h2>
    <h2 v-else-if="type === 'C'">C</h2>
    <h2 v-else>D</h2>
    <button @click="type = 'A'">A 버튼</button>
    <button @click="type = 'B'">B 버튼</button>
    <button @click="type = 'C'">C 버튼</button>
    <button @click="type = 'D'">D 버튼</button>

    <p>
      한가지 팁을 추가하자면, 여러개의 태그를 v-if 조건문에 따라 보여지거나 사라지도록 할때,
      &lt;div&gt;태그를 wrapper로 사용하기 보다는 새로운 &lt;template&gt; 태그를 사용해 여러개의
      태그를 감싸고 v-if 조건문을 달아주면,&nbsp; wrapper로 사용된 &lt;template&gt; 태그는 렌더링
      되지 않는 이점이 있습니다.&nbsp;
    </p>
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <hr />

    <button @click="ok = !ok">토글토글</button>
    <h1 v-show="ok">v-show 실습</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const visible = ref(true);
    const type = ref('A');
    const ok = ref(true);

    return {
      visible,
      type,
      ok,
    };
  },
};
</script>

<style lang="scss" scoped></style>
