<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click.self="clickP">
          P 영역
          <!-- <span @click.stop="clickSpan">SPAN 영역</span> -->
          <span @click="clickSpan">SPAN 영역</span>
          <a href="https://naver.com" target="_blank" @click.prevent.stop="clickA">a 영역</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      // location.href = 'https://naver.com';
    };

    const clickP = () => {
      console.log('clickP');
    };

    // const clickSpan = (e) => {
    //   console.log('clickSpan');
    //   e.stopPropagation(); // 이벤트 전파 막기
    //   alert('좋아요!');
    // };

    const clickSpan = () => {
      console.log('clickSpan');
      // alert('좋아요!');
    };

    // const clickA = (e) => {
    //   e.preventDefault(); // 기본 기능 막기
    //   alert('어떤 기능!');
    // };

    const clickA = () => {
      alert('어떤 기능!');
    };

    return { clickDiv, clickP, clickSpan, clickA };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: #ddd;
}

#modifiers p {
  background-color: #ccc;
}

#modifiers span {
  display: block;
  background-color: #bbb;
}
</style>
