<template>
  <div>
    <h2>v-once</h2>
    <!-- 한 번만 렌더링하기 때문에 button을 아무리 클릭해도 값이 증가하지 않는다. -->
    <div v-once>
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>

    <h2>v-memo - 업데이트 X</h2>
    <!-- v-memo="[]" 내부의 반응형 데이터가 변경이 일어났을 때만 업데이트된다. -->
    <div v-memo="[]">
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
    <button @click="subscribers++">subscribers ++</button>
    <button @click="views++">views ++</button>
    <button @click="likes++">likes ++</button>

    <h2>v-memo - 업데이트 O</h2>
    <!-- subscribers가 변경되었을 때 한꺼번에 (다른 것도 같이) 업데이트 하는 코드 -->
    <div v-memo="[subscribers]">
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>

    <!-- views나 likes가 변경되었을 때 한꺼번에 (다른 것도 같이) 업데이트 하는 코드 -->
    <div v-memo="[views, likes]">
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(20);

    return { subscribers, views, likes };
  },
};
</script>

<style lang="scss" scoped></style>
