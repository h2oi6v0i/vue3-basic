<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
    {{ book }}
  </div>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
  setup() {
    /** 반응형 객체에서 반응성을 유지하며 속성을 가져오고 싶을 때 toRef(), toRefs() 사용한다. */
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 이 책을 지금 바로 읽습니다 ;)',
      price: '무료',
    });

    // const { author, title } = book;

    /**
     * 구조 분해 할당을 하면 반응성을 잃어버림
     * -> 반응성을 잃지 않으면서 구조 분해 할당을 할 수는 없을까? -> toRefs() 사용하면 된다!
     * const { author, title } = toRefs(book);
     */

    /**
     * 구조 분해 할당 말고 객체에서 하나만 가지고 오고 싶을 땐 toRef() 사용
     */
    const author = toRef(book, 'author');
    const title = toRef(book, 'title');

    return { author, title, book };
  },
};
</script>

<style lang="scss" scoped></style>
