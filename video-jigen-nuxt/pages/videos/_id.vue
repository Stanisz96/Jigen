<template>
  <div>
    <nuxt-child :video="video" />
    <nuxt-link :to="`/videos`">Back</nuxt-link>
  </div>
</template>

<script>
export default {
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