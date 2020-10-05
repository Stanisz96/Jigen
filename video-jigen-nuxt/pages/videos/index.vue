<template>
  <div>
    <h1>Videos</h1>
    <div v-for="video in videos" :key="video._id">
      <nuxt-link :to="`/videos/${video._id}`">{{ video.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let response = await $axios.get("videos");
    let videos = response.data;

    return {
      videos,
    };
  },
};
</script>

<style>
</style>