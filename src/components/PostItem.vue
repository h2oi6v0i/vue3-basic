<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary"> {{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">{{ contents }}</p>
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: 'news',
      validator: (value) => {
        return ['news', 'notice'].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      // required: true,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    /**
     * 배열, 객체같은 레퍼런스 타입의 기본값은 팩토리 함수에서 반환 되어야 한다.
     * data를 함수로 선언해서 return 하는 것과 같은 이유이다.
     * reference 타입의 자료형들은 함수로 새롭게 만들어서 리턴을 안 해주면 원본을 참조, 공유해버리기 때문에 함수로 만들어 리턴을 하는 방식으로 해야 하는 것 같다.
     */
    obj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  emits: ['toggleLike'],

  setup(props, context) {
    /** 카드 타입 */
    const typeName = computed(() => {
      return props.type === 'news' ? '뉴스' : '공지사항';
    });

    /** 좋아요 상태별 클래스 */
    const isLikeClass = computed(() => {
      return props.isLike ? 'btn-danger' : 'btn-outline-danger';
    });

    /** 좋아요 상태 토글 */
    const toggleLike = () => {
      context.emit('toggleLike');
    };

    return { isLikeClass, typeName, toggleLike };
  },
};
</script>
