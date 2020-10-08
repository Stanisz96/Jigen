export default async function ({ store, from }) {
  let isInitPage = !from;
  if (isInitPage) {
    await store.dispatch("videoModule/loadVideos");
    await store.dispatch("tagModule/loadTags");
  }
}