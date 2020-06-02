<template>
  <div class="my-3">
    <input
      class="form-control"
      placeholder="동영상 검색"
      type="text"
      @keydown.enter="onEnter"
      v-focus
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onEnter(e) {
      this.$emit('input-change', e.target.value)
    },
  },
  directives: {
    focus: { // 모바일 사파리에서도 동작하게 하기 위해 custom [autofocus]
      inserted: function (el) {
        el.focus()
      }
    }
  },
}
</script>

<style>

</style>