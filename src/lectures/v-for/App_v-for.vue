<template>
  <div>
    <ul>
      <template v-for="(item, index) in evenItems" :key="index">
        <!-- <li v-if="item.id % 2 === 0">{{ item.id }}</li> -->
        <li>ID: {{ item.id }} / 인덱스: {{ index }} / {{ item.message }}</li>
      </template>
    </ul>

    <hr />

    <!-- 객체 반복 -->
    <ul>
      <li v-for="(key, value, index) in myObject" :key="index">
        {{ index }} | {{ key }} | {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'Java' },
      { id: 2, message: 'HTML' },
      { id: 3, message: 'CSS' },
      { id: 4, message: 'JavaScript' },
    ]);

    /** 짝수만 출력 */
    const evenItems = computed(() => items.filter((item) => item.id % 2 === 0));

    const myObject = reactive({
      title: '제목',
      author: '전개리',
      publishedAt: '2023-07-12',
    });

    return { items, evenItems, myObject };
  },
};
</script>

<style lang="scss" scoped></style>
