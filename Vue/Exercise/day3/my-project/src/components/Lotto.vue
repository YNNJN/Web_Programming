<template>
  <div>
    <h1>Lotto</h1>
    <button @click="getNumbers">숫자 생성</button>
    <p>{{ choices }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
      numbers: _.range(1, 46),
      choices: '',
    }
  },
  methods: {
    getNumbers: function () {
      this.choices = _.sampleSize(this.numbers, 6)
      this.choices.sort((a,b) => a-b)
    },
  },
}
</script>

<style>

</style>