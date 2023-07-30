<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title red">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { useCssModule } from 'vue';

export default {
  setup() {
    // const style = useCssModule();
    // console.log(style);

    const color = ref('red');

    return { color };
  },
};
</script>

<style>
/* <style module> : style에 module 속성을 붙이면 스타일 규칙이 $style 내장 객체 속성으로 포함된다. */
/* <style module="classes"> : classes */
.red {
  /* color: red !important; */
  color: v-bind(color) !important;
}
</style>
