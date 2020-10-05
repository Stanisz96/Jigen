<template>
  <div>
    <nuxt-child :video="video" />
    <nuxt-link :to="`/videos`">Back</nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      titleTemplate: `%s ${this.video.name}`,
    };
  },
  async fetch({ $axios, params, store }) {
    let response = await $axios.get(`videos/${params.id}`);
    let video = response.data;

    store.commit("SET_CURRENT_VIDEO", video);
  },
  computed: {
    ...mapState({
      video: "currentVideo",
    }),
  },
};
</script>

<style>
</style>