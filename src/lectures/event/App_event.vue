<template>
  <div>
    <!-- 이벤트 객체를 인라인으로 넘길 땐 $event 이렇게 씀! -->
    <button @click="printEventInfo('안녕 Vue3', $event)">inline event handler</button>
    <input type="text" @keyup="onKeyupHandler" />
  </div>
</template>

<script>
export default {
  setup() {
    const printEventInfo = (message, event) => {
      console.log('message: ', message);
      console.log('event.target: ', event.target); // event 객체 안에 있는 target 엘리먼트 출력
      console.log('event.target.tagName: ', event.target.tagName);
    };

    const onKeyupHandler = (event) => {
      console.log('event.key: ', event.key);
    };

    return { printEventInfo, onKeyupHandler };
  },
};
</script>

<style lang="scss" scoped></style>
