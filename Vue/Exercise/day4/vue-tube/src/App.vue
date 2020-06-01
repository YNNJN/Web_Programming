<template>
  <div id="app">
    <SearchBar @input-change="onInputChange"/>
    <VideoList  :videos="videos"/> <!-- 왼쪽은 이름, 오른쪽은 데이터 -->
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar.vue'
import VideoList from '@/components/VideoList.vue'
const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY // 환경변수의 것을 가져오겠다 (nodejs 문법)
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  data() {
    return {
      videos: [],
    }
  },
  methods: {
    onInputChange(userInput) {
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
          this.videos = res.data.items
        })
        .catch(err => {
          console.error(err)
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
