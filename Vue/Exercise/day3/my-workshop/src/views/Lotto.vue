<template>
  <div>
    <h1>Lotto</h1>
    <button @click="getNumbers">숫자 생성</button>
    <p v-for="choice in choices" :key="choice.index" class="bold">{{ choice }}</p>
    <button @click="visible = !visible">Add One</button>
    <p v-if="visible">{{ addOne() }}</p>
    <!-- mustache 안에서 호출한 함수는 무한루프에 빠짐. render->함수호출->render->... 돔을 다 그릴 때까지 -->
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
      numbers: _.range(1, 46),
      choices: '',
      count: 0,
      visible: true,
    }
  },
  methods: {
    getNumbers: function () {
      this.choices = _.sampleSize(this.numbers, 6)
      this.choices.sort((a,b) => a-b)
    },
    addOne: function () {
      this.count++
      return this.count
    },
  }

}
</script>

<style>
.bold {
  font-weight: bold;
}
</style>