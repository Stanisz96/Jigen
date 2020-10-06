<template>
  <div>
    <div class="display-3 font-weight-regular my-6 d-flex justify-center">
      Music Videos
    </div>
    <div class="d-flex flex-wrap justify-center">
      <div v-for="video in videos" :key="video._id">
        <VideoListVideo :video="video" :active="true" class="ma-3 pa-2" />
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
  async asyncData({ $axios, store }) {
    let response = await $axios.get("videos");
    let videos = response.data;

    store.commit("SET_VIDEOS", videos);

    return {
      videos,
    };
  },
};
</script>

<style>
</style>