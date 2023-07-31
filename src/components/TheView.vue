<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="my-button" @click="sayHello" />
      <LabelInput label="이름" data-id="아이디입니다" />
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';

export default {
  components: {
    LabelInput,
    MyButton,
  },

  setup() {
    const sayHello = () => {
      console.log('Hello');
    };

    return { sayHello };
  },
};
</script>

<style></style>
