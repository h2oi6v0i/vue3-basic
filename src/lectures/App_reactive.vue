<template>
  <div>
    <!-- state 객체가 갖고 있는 속성이기 때문에 -->
    <button @click="increment">Click {{ state.count }}</button>
    <button @click="increment">Deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });

    const increment = () => {
      state.count++;
      state.deep.count++;
    };

    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
