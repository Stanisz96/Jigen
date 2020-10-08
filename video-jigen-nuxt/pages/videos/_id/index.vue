<template>
  <div>
    <!-- We are in video {{ video.name }}
    <nuxt-link :to="`/videos/${video._id}/edit`">
      <button>Edit</button>
    </nuxt-link> -->
  </div>
</template>

<script>
export default {
  props: ["video"],
  head: {
    title: "Watch",
  },
};
</script>

<style>
</style>