<template>
  <div>
    <h1>Lunch</h1>
    <p v-for="menu in menus" :key="menu.index">{{ menu }}</p>
    <button @click="pick">랜덤 선택</button>
    <p class="bold">{{ choice }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
      menus: ['짜장', '짬뽕', '김밥', '라면'],
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