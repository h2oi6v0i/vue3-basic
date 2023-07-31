<template>
  <main>
    <div class="container py-4">
      <PostCreate @create-post="createPost" />
      <hr class="my-4" />
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <AppCard
            :type="post.type"
            :title="post.title"
            :contents="post.contents"
            :isLike="post.isLike"
            @toggle-like="post.isLike = !post.isLike"
          />
        </div>
      </div>
      <hr class="my-4" />
      <!-- <LabelInput :model-value="userName" @update:model-value="(value) => (userName = value)" /> -->
      <LabelInput label="이름" v-model="userName" />
      <!-- 📝 전달인자 사용하여 modelVAlue, update:modelValue 이름 변경하기 -->
      <LabelTitle label="제목" v-model:title="userName" />
      <!-- 📝 전달인자 활용하여 두 개의 v-model을 적용 -->
      <Username v-model:firstname="firstname" v-model:lastname="lastname" />
    </div>
  </main>
</template>

<script>
import { ref, reactive } from 'vue';
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import Username from '@/components/Username.vue';

export default {
  components: {
    AppCard,
    LabelTitle,
    LabelInput,
    PostCreate,
    Username,
  },

  setup() {
    const posts = reactive([
      { id: 1, type: 'news', title: '제목1', contents: '내용1', isLike: true },
      { id: 2, type: 'news', title: '제목2', contents: '내용2', isLike: false },
      { id: 3, type: 'notice', title: '제목3', contents: '내용3', isLike: true },
      { id: 4, type: 'notice', title: '제목4', contents: '내용4', isLike: false },
      { id: 5, type: 'news', title: '제목5', contents: '내용5', isLike: true },
    ]);

    const createPost = (newPost) => {
      posts.push(newPost);
    };

    const userName = ref('');
    const firstname = ref('');
    const lastname = ref('');

    return { posts, createPost, userName, firstname, lastname };
  },
};
</script>

<style scoped></style>
