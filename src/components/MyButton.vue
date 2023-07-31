<template>
  <div class="p-3 bg-danger">
    <button class="btn btn-primary" type="button" @click="sayHello">My Button</button>
  </div>
</template>

<script>
export default {
  /**
   * 이래서 얼마 전에 컴포넌트 정리하면서 icon을 수정했지
   * button이 상속 받아야 하는데 루트 엘리먼트에 상속되는 거 진짜 진짜 싫어
   * 이런 불상사를 막아주는 게 inheritAttrs: false
   * 근데 이렇게 하면 아예 상속이 안 되는데 button에 적용하고 싶으면 어떻게 함?
   * $attrs 객체 활용하면 됨
   */
  // inheritAttrs: false,

  /** emit 내보낼 때 반드시 적어줘야 Non prop 속성에서 제외됨 */
  emits: ['click'],

  setup(props, { emit }) {
    // console.log(context.attrs.onClick);

    const sayHello = () => {
      emit('click');
    };

    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
