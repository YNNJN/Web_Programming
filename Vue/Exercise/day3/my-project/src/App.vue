<template>
  <div id="app">
    <div>
      <button @click="statusIndex">Index</button>
      <button @click="statusLunch">Lunch</button>
      <button @click="statusLotto">Lotto</button>
    </div>
    <Index v-if="status === 'index'" />
    <Lunch v-if="status === 'lunch'" /> <!-- 등록한 컴포넌트를 html 태그처럼 사용 -->
    <Lotto v-if="status === 'lotto'" />
  </div>
</template>

<script>
import Index from './components/Index.vue' // PascalCase
import Lunch from './components/Lunch.vue'
import Lotto from './components/Lotto.vue'

export default {
  name: 'App',
  components: {
    Index,
    Lunch,
    Lotto,
  },
  data: function () {
    return {
      status: 'index',
    }
  },
  methods: {
    statusIndex: function () {
      this.status = 'index'
    },
    statusLunch: function () {
      this.status = 'lunch'
    },
    statusLotto: function () {
      this.status = 'lotto'
    },
  },
}
</script>

<style>
#app {
  font-family: Helvetica;
  text-align: center;
  margin-top: 100px;
}
</style>
