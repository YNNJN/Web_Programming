<template>
  <div>
    <h1>TodoList</h1>
    <ul>
      <!-- 할 일 목록을 보여줄 예정 -->
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.isCompleted}">
          <!-- <input type="checkbox" v-model="todo.isCompleted"> -->
          <!-- 위와 같은 양방향 바인딩은 부모의 값을 바꾸게 됨 -->
          <!-- checked가 변경될 때 부모에게 알려주고 싶다 -->
          <input type="checkbox" :checked="todo.isCompleted" @click="$emit('checked', todo)">
          {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList', // 컴포넌트의 이름과 같은 이름 권장
  props: {
    todos: {
      // 유효성 검사
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>