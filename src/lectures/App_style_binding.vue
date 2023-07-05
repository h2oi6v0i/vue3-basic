<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam
      illo fugiat deserunt amet exercitationem animi cupiditate, ut nihil
      quaerat quidem dolor beatae aspernatur! Mollitia temporibus odit
      doloremque voluptatum illum?
    </div>
    <button @click="fontSize--">-</button>
    <button @click="fontSize++">+</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    // const styleObject = reactive({
    //   color: 'cornflowerblue',
    //   fontSize: '18px',
    // });

    const fontSize = ref(18);

    const styleObject = computed(() => {
      return {
        color: 'cornflowerblue',
        fontSize: fontSize.value + 'px',
      };
    });

    return { styleObject, fontSize };
  },
};
</script>

<style lang="scss" scoped></style>
