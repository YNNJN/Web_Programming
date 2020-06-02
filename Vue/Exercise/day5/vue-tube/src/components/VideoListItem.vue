<template>
  <div>
    <div @click="onVideoSelect" class="card my-5 p-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <!-- <img width="100%" :src="thumbnailUrl" alt="youtube image thumbnail"> -->
          <v-lazy-image
            :src="thumbnailUrl"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body py-0">
            <h5 class="card-title mt-3">{{ safeTitle }}</h5>
            <p class="card-text">{{ video.snippet.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
    }
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.high.url
    },
    safeTitle() {
      return _.unescape(this.video.snippet.title)
    }
  },
  methods: {
    onVideoSelect() {
        this.$emit('video-select', this.video)
    }
  },
}
</script>

<style scoped>
.v-lazy-image {
  width: 100%;
  filter: blur(3px);
  transition: filter 0.5s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

</style>