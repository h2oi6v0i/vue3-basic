<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '넹' : '아니여' }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <button @click="counter++">Counter : {{ counter }}</button>
    <em style="display: block">{{ fullName }}</em>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    const teacher = reactive({
      name: '짐코딩',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
    });

    /** 화살표 함수는 명령어가 하나일 때 return, 중괄호 생략 가능 */
    const hasLecture = computed(() => {
      console.log('computed');
      return teacher.lectures.length > 0 ? '넹 ' : '아니여';
    });

    const existLecture = () => {
      console.log('method');
      return teacher.lectures.length > 0 ? '넹 ' : '아니여';
    };

    const counter = ref(0);

    /**
     * getter/setter 활용하여 computed를 쓰기 가능 속성으로 만들기
     */
    const firstName = ref('전');
    const lastName = ref('개리');
    const fullName = computed({
      // getter니까 무언가를 return 해야 한다. fullName은 여기서 리턴한 값
      get() {
        return `${firstName.value} ${lastName.value}`;
      },
      // setter니까 무언가를 받는다. fullName.value = '전유정' 이게 매개변수로 넘어옴
      set(value) {
        console.log('value :', value);
        console.log(value.split(' ')); // 띄어쓰기 기준으로 쪼개기 -> ['전', '유정']
        // 배열 구조 분해 할당
        // const [first, last] = value.split(' '); 이건 새로운 변수에 할당하는 거고
        // 우리는 기존 변수에 할당할 거야
        [firstName.value, lastName.value] = value.split(' ');
        console.log('frist name :', firstName.value); // 전
        console.log('last name :', lastName.value); // 유정
      },
    });

    console.log('콘솔 출력 :', fullName.value);
    fullName.value = '전 유정';

    return {
      teacher,
      hasLecture,
      existLecture,
      counter,
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
