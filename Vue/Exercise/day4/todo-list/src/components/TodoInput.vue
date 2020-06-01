<template>
  <div>
    <input type="text" v-model="userInput" @keypress.enter="createTodo">
    <button @click="createTodo">등록</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      userInput: '',
    }
  },
  methods: {
    createTodo() {
      const newTodo = {
        id: Date.now(),
        content: this.userInput,
        isCompleted: false,
      }
      this.$emit('create-todo', newTodo) // 이벤트가 부모에 있으니, 이 때 this를 반드시 붙임
      // emit은 자식부터 작성할 것 (데이터가 변하는 곳이니)
      this.userInput = ''
    }
  },
}
</script>

<style>

</style>