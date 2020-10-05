<template>
  <div>
    <h1>Editing {{ video.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["video"],
  head: {
    title: "Edit",
  },
};
</script>

<style>
</style>