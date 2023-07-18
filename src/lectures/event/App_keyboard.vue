<template>
  <div>
    <input type="text" @keyup.ctrl.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const todos = reactive([]);

    /** Todo 추가 */
    const addTodo = (event) => {
      todos.push(event.target.value); // input에 입력된 문자열
      event.target.value = ''; // input 초기화
      event.target.focus(); // input에 focus 주기
    };

    return { todos, addTodo };
  },
};
</script>

<style lang="scss" scoped></style>
