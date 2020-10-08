import RSVP from 'rsvp'

export default async function ({ store, from }) {
  let isInitPage = !from;
  if (isInitPage) {
    await RSVP.all([
      store.dispatch("videoModule/loadVideos"),
      store.dispatch("tagModule/loadTags")
    ])
  }
}