<template>
  <div class="card">
    <!-- header라는 이름의 slot이 정의되었을 때만 보이는 영역 -->
    <div v-if="$slots.header" class="card-header">
      <slot name="header" header-message="헤더 메시지"></slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :child-message="childMessage" test-message="테스트입니다">#Body</slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-muted">
      <slot name="footer" footer-message="푸터 메시지"></slot>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup(props, { slots }) {
    const childMessage = ref('자식 컴포넌트 메시지');

    // footer가 있다면 true를 반환하고, 그렇지 않으면 false를 반환한다.
    const hasFooter = computed(() => !!slots.footer);

    return { childMessage, hasFooter };
  },
};
</script>

<style lang="scss" scoped></style>
