<template>
  <div>
    <!-- 폼을 변경할 때마다 자동으로 저장하는 기능 구현 -->
    <!-- 버튼의 기본 type은 submit이기 때문에 button을 클릭하면 form에 submit이 호출된다. -->

    <!-- 방법 1️⃣ 이렇게 해도 되고 -->
    <!-- <form @submit.prevent="save(title, contents)"> -->

    <!-- 방법 2️⃣ 이렇게 해도 됨 -->
    <form @submit.prevent>
      <input v-model.lazy="title" type="text" placeholder="Title" />
      <textarea v-model.lazy="contents" placeholder="Contents"></textarea>

      <!-- <button>Save</button> -->
      <button @click="save(title, contents)">Save</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장되었습니다. 제목: ${title}, 내용: ${contents}`);
    };

    // watchEffect는 watch와 다르게 최초 1번 즉시 실행!
    watchEffect(() => {
      console.log('watchEffect');
      save(title.value, contents.value);
    });

    return { title, contents, save };
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

button {
  height: 40px;
}
</style>
