<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="my-button" @click="sayHello" />
      <LabelInput label="이름" data-id="아이디입니다" />

      <hr />
      <FancyButton>
        <template #default="{ fancyMessage }">{{ fancyMessage }}</template>
      </FancyButton>

      <hr />
      <AppCard>
        <template #header="{ headerMessage }">{{ headerMessage }}</template>
        <template #default="{ childMessage, testMessage }">
          디폴트입니다
          {{ childMessage }}
          {{ testMessage }}
        </template>
        <template #footer="{ footerMessage }">{{ footerMessage }}</template>
      </AppCard>

      <hr />
      <AppCard>Header, Footer 사용하기 싫어요! </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
  components: {
    LabelInput,
    MyButton,
    FancyButton,
    AppCard,
  },

  setup() {
    const sayHello = () => {
      console.log('Hello');
    };

    const slotArgs = ref('header');
    const message = ref('Render Scope');

    return { sayHello, slotArgs, message };
  },
};
</script>

<style></style>
