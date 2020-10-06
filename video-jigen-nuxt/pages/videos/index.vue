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
  async asyncData({ $axios, store }) {
    let response = await $axios.get("videos");
    let videos = response.data;

    store.commit("SET_VIDEOS", videos);

    response = await $axios.get("tags");
    let tags = response.data;

    store.commit("SET_TAGS", tags);

    return {
      videos,
      tags,
    };
  },
};
</script>

<style>
</style>