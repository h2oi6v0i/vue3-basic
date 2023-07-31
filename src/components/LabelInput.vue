<template>
  <!-- 다중 루트 노드를 사용할 때는 어디에 상속을 할지 명시적으로 지정해야 함 -->
  <label class="form-label" id="child-id">
    {{ label }}
  </label>
  <input v-model="value" type="text" v-bind="$attrs" class="form-control" />
</template>

<script>
import { computed } from 'vue';

export default {
  /**
   * Vue3에서는 modelValue라는 props로 값을 입력 받아서 update:modelValue로 event를 발생시킨다.
   * 이러한 props와 event를 구현해서 커스텀 컴포넌트의 v-model을 구현할 수 있는 것이다.
   */
  props: ['modelValue', 'label'], // [Vue2] value
  emits: ['update:modelValue'], // [Vue2] @input

  setup(props, { emit }) {
    /**
     * 컴포넌트 안에서 computed를 사용하여 v-model 구현하기
     * computed는 읽기 전용이지만, getter/setter를 사용하면 쓰기도 가능하다.
     */
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });

    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
