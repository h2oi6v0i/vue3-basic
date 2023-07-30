<template>
  <div></div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    /**
     * 1️⃣ watch의 첫 번째 매개변수로 getter 함수를 넣어줌으로써 x, y의 합을 감지할 수 있다.
     * getter 함수에 의해 감지가 되었을 때 합(sum)을 받는다.
     */

    // watch(
    //   () => x.value + y.value,
    //   (sum, oldValue) => {
    //     console.log('sum : ', sum);
    //     console.log('old value : ', oldValue);
    //   }
    // );

    /**
     * 2️⃣ 매개변수로 array를 넘겨서 한꺼번에 따로 관리할 수도 있음
     */

    // watch([x, y], ([newX, newY]) => {
    //   console.log(newX, newY);
    // });

    /**
     * 3️⃣ 매개변수로 객체 넘기기
     * obj.count 이건 안 됨 왜? 얘는 반응형이 아니라 그냥 숫자일 뿐...
     * obj의 특정 속성만 감지하고 싶으면 getter 함수 써야 한다.
     */

    const obj = reactive({
      count: 0,
    });

    // watch(
    //   () => obj.count,
    //   (newValue, oldValue) => {
    //     console.log('new value : ', newValue);
    //     console.log('old value : ', oldValue);
    //   }
    // );

    // watch(obj, (newValue, oldValue) => {
    //   console.log('new value : ', newValue);
    //   console.log('old value : ', oldValue); // 두 개 같은 값 찍힘 왜?
    //   // 반응형 객체를 직접 watch() 하면 암시적으로 깊은 감시자가 생성된다.
    //   // 즉, 변경된 속성뿐만 아니라 그 외의 모든 속성까지 감지가 된다.
    // });

    const person = reactive({
      name: '김익명',
      age: 30,
      hobby: '독서',
      obj: {
        count: 0,
      },
    });

    // watch(person, (newValue) => {
    //   console.log('new value : ', newValue);
    // });

    // getter 함수는 getter 함수로부터 받은 값이 바뀌었냐 안 바뀌었냐를 가지고 체크한다.
    watch(
      () => person.obj,
      (newValue) => {
        console.log('new value : ', newValue);
      }
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>
