<template>
  <div>
    <nuxt-child :video="video" />
    <nuxt-link :to="`/videos`">Back</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `%s ${this.video.name}`,
    };
  },
  async asyncData({ $axios, params }) {
    let response = await $axios.get(`videos/${params.id}`);
    let video = response.data;

    return {
      video,
    };
  },
};
</script>

<style>
</style>