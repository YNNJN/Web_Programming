<template>
  <div>
    <TodoList :todos="todos" @checked="updatedTodo"/>
    <TodoInput @create-todo="createTodo"/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
// import TodoList from '@/components/TodoList.vue' // 위와 동일
import TodoInput from '../components/TodoInput.vue'

export default {
  name: 'TodoView',
  components: {
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          content: 'Django 복습',
          isCompleted: true,
        },
        {
          id: 2,
          content: '저녁 메뉴 정하기',
          isCompleted: false,
        },
        {
          id: 3,
          content: 'Vue 복습',
          isCompleted: false,
        },
      ],
    }
  },
  methods: {
    updatedTodo(todo) {
      todo.isCompleted = !todo.isCompleted
    },
    createTodo(todo) {
      this.todos.push(todo)
    },
  }
}
</script>

<style>

</style>