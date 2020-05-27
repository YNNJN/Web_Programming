<template>
  <div>
    <h1>Lunch</h1>
    <p>{{ menus }}</p>
    <button @click="pick">랜덤 선택</button>
    <p>{{ choice }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
      menus: ['파스타', '커피', '라면', '삼겹살'],
      choice: '',
    }
  },
  methods: {
    pick: function () {
      this.choice = _.sample(this.menus)
    },
  },
}
</script>

<style>

</style>