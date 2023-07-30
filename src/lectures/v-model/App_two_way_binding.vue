<template>
  <div class="input-group">
    <div>
      <h3>1️⃣ Input value</h3>
      <!-- <input type="text" :value="inputValue" @input="(event) => (inputValue = event.target.value)" /> -->
      <!-- <input type="text" v-model.lazy="inputValue" /> -->
      <!-- <input type="text" v-model.number="inputValue" /> -->
      <input type="text" v-model.trim="inputValue" />
      <div>{{ inputValue }}</div>
    </div>

    <div>
      <h3>2️⃣ Textarea value</h3>
      <!-- <textarea :value="textareaValue" @input="(event) => (textareaValue = event.target.value)" /> -->
      <textarea v-model="textareaValue" />
      <div>{{ textareaValue }}</div>
    </div>

    <div>
      <h3>3️⃣ Checkbox value</h3>
      <label for="checkbox">{{ checkboxValue }}</label>
      <!-- <input type="checkbox" id="checkbox" :checked="checkboxValue" @change="(event) => (checkboxValue = event.target.checked)" /> -->
      <input
        type="checkbox"
        id="checkbox"
        v-model="checkboxValue"
        true-value="Yes"
        false-value="No"
      />
    </div>

    <div>
      <h3>4️⃣ Checkbox values</h3>
      <label><input type="checkbox" value="html" v-model="checkboxValues" />HTML</label>
      <label><input type="checkbox" value="css" v-model="checkboxValues" />CSS</label>
      <label><input type="checkbox" value="javascript" v-model="checkboxValues" />JavaScript</label>
      <div>{{ checkboxValues }}</div>
    </div>

    <div>
      <h3>5️⃣ Radio Value</h3>
      <label>
        <!-- <input type="radio" name="type" value="0" :checked="radioValue === 0" @change="(event) => (radioValue = event.target.value)"/> -->
        <input type="radio" name="type" value="0" v-model="radioValue" />
        집에 있기
      </label>
      <label>
        <!-- <input type="radio" name="type" value="0" :checked="radioValue === 1" @change="(event) => (radioValue = event.target.value)"/> -->
        <input type="radio" name="type" value="1" v-model="radioValue" />
        외출하기
      </label>
      <div>{{ radioValue }}</div>
    </div>

    <div>
      <h3>6️⃣ Select Value</h3>
      <select v-model="selectValue">
        <!-- <select :value="selectValue" @change="(event) => (selectValue = event.target.value)"> -->
        <option value="html">HTML 수업</option>
        <option value="css">CSS 수업</option>
        <option value="javascript">JavaScript 수업</option>
      </select>
      <div>{{ selectValue }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const textareaValue = ref('');
    const checkboxValue = ref('Yes');
    const checkboxValues = ref([]);
    const radioValue = ref(0);
    const selectValue = ref('html');

    return { inputValue, textareaValue, checkboxValue, checkboxValues, radioValue, selectValue };
  },
};
</script>

<style>
.input-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(150px, auto));
  row-gap: 12px;
  column-gap: 12px;
}

.input-group > div {
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
