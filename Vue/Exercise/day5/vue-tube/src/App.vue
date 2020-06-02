<template>
  <div id="app" class="container">
    <VideoDetail :selectedVideo="selectedVideo"/>
    <SearchBar @input-change="getYoutubeVideos"/>
    <VideoList :videos="videos" @video-select="onVideoSelect"/>
    <!-- VideoDetail.vue -->
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar.vue'
import VideoList from '@/components/VideoList.vue'
import VideoDetail from '@/components/VideoDetail.vue'

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null, // 개발자가 명시적으로 빈값을 주고싶을 때 사용함
    }
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video
      console.log(this.selectedVideo)
    },
    getYoutubeVideos(userInput) {
      this.selectedVideo = null
      const config = {
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          q: userInput,
        }
      }
      axios.get(YOUTUBE_API_URL, config)
        .then(res => {
          console.log(res.data)
          this.videos = res.data.items
        })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
