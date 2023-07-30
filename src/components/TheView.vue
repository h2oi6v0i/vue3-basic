<template>
  <main>
    <div class="container py-4">
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
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from '@/components/AppCard.vue';

export default {
  components: {
    AppCard,
  },

  setup() {
    const posts = reactive([
      { id: 1, type: 'news', title: '제목1', contents: '내용1', isLike: true },
      { id: 2, type: 'news', title: '제목2', contents: '내용2', isLike: false },
      { id: 3, type: 'notice', title: '제목3', contents: '내용3', isLike: true },
      { id: 4, type: 'notice', title: '제목4', contents: '내용4', isLike: false },
      { id: 5, type: 'news', title: '제목5', contents: '내용5', isLike: true },
    ]);

    return { posts };
  },
};
</script>

<style scoped></style>
