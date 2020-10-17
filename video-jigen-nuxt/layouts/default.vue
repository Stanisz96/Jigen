<template>
  <v-app>
    <v-app-bar app short color="#21947b">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn to="/" text large class="text--text">Home</v-btn>
      <v-btn to="/videos" text large class="text--text">Videos</v-btn>
      <v-btn to="/admin" text large class="text--text">Admin</v-btn>
    </v-app-bar>
    <v-main><Nuxt /></v-main>
  </v-app>
</template>

<script>
export default {
  middleware: "load-videos-and-tags",
};
</script>

<style>
#default-body {
  max-width: 800px;
  margin: auto;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
