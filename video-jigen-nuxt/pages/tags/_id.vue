<template>
  <div v-if="tag">
    <div class="display-3 font-weight-regular my-6 d-flex justify-center">
      Tag: {{ tag.name }}
    </div>
    <div class="d-flex flex-wrap justify-center">
      <div v-for="video in videosOnTag" :key="video._id">
        <VideoListVideo
          :video="video"
          :tags="tags"
          :active="true"
          class="ma-2 pa-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import VideoListVideo from "@/components/VideoListVideo";
export default {
  name: "TagVideoList",
  components: {
    VideoListVideo,
  },
  computed: {
    ...mapGetters({
      getTag: "tagModule/getTag",
    }),
    ...mapState({
      videos: (state) => state.videoModule.videos,
      tags: (state) => state.tagModule.tags,
    }),
    tag() {
      return this.getTag(this.$route.params.id);
    },
    videosOnTag() {
      return this.videos.filter((v) => this.tag.videosId.includes(v._id));
    },
  },
  destroyed() {
    console.log(`Tag video list has been destroyed!`);
  },
};
</script>

<style>
</style>