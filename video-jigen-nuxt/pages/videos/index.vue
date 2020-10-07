<template>
  <div>
    <div class="display-3 font-weight-regular my-6 d-flex justify-center">
      Music Videos
    </div>
    <div class="d-flex flex-wrap justify-center">
      <div v-for="video in videos" :key="video._id">
        <VideoListVideo
          :video="video"
          :tags="tags"
          :active="true"
          class="ma-3 pa-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoListVideo from "@/components/VideoListVideo";
export default {
  components: {
    VideoListVideo,
  },
  head: {
    title: "Video Jigen - Video List",
  },
  computed: {
    videos() {
      return this.$store.state.videos.videos;
    },
    tags() {
      return this.$store.state.tags.tags;
    },
  },
  async fetch({ store }) {
    await store.dispatch("videos/loadVideos");
    await store.dispatch("tags/loadTags");
  },
};
</script>

<style>
</style>