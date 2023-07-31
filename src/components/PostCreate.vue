<template>
  <div class="row g-3">
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col col-2 d-grid">
      <!-- 방법 1️⃣ -->
      <!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, '전개리')">button</button> -->
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // emits: ['createPost'],

  emits: {
    createPost: (newPost) => {
      if (!newPost.type) {
        return false;
      } else if (!newPost.title) {
        return false;
      }
      return true;
    },
  },

  /** 방법 2️⃣ - 기본 */
  // setup(props, context) {
  //   const createPost = () => {
  //     context.emit('createPost', 1, 2, 3, '전개리');
  //   };

  //   return { createPost };
  // },

  /** 방법 2️⃣ - 구조 분해 할당 */
  setup(props, { emit }) {
    const type = ref('news');

    const title = ref('');

    /** 새로운 Post 추가 */
    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value,
      };

      emit('createPost', newPost);

      // 초기화
      type.value = 'news';
      title.value = '';
    };

    return { type, title, createPost };
  },
};
</script>

<style></style>
