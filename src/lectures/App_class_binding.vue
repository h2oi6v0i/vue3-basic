<template>
  <div>
    <div
      :class="[isActive ? 'active-class' : 'class', activeClass, errorClass]"
    >
      텍스트 📝
    </div>
    <button @click="toggle">토글토글</button>
    <button @click="hasError = !hasError">에러 발생</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    // const classObject = ref({
    //   active: true,
    //   'text-danger': true,
    // });

    const classObject = computed(() => {
      return {
        active: true && true,
        'text-danger': true && true,
        'text-blue': true,
      };
    });

    const activeClass = ref('active');
    const errorClass = ref('error');

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return { isActive, toggle, hasError, classObject, activeClass, errorClass };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-danger {
  color: red;
}
</style>
