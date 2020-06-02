<template>
  <div>
    <VideoListItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @video-select="onVideoSelect"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: {
      type: Array,
    }
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('video-select', video)
    },
  },
}
</script>

<style scoped>
.container {
  max-height: 500px !important;
  overflow: scroll;
}

</style>