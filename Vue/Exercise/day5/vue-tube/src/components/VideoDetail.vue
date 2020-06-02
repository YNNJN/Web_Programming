<template>
  <div v-if="selectedVideo">
    <iframe
      :src="videoUrl"
      frameborder="0"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    selectedVideo: {
      type: Object,
    }
  },
  computed: {
    videoUrl() {
      const videoId = this.selectedVideo.id.videoId
      return `http://www.youtube.com/embed/${videoId}`
    }
  }
}
</script>

<style>

</style>