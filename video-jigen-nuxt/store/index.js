export const state = () => ({
  videos: [],
  currentVideo: {},
  tags: []
})

export const mutations = {
  SET_VIDEOS(state, videos) {
    state.videos = videos
  },
  SET_CURRENT_VIDEO(state, video) {
    state.currentVideo = video
  },
  SET_TAGS(state, tags) {
    state.tags = tags
  },
}
