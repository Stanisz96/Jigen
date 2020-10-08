export const state = () => ({
  videos: []
})


export const mutations = {
  SET_VIDEOS(state, videos) {
    state.videos = videos;
  },
  ADD_VIDEO(state, video) {
    let videos = state.videos.concat(video)

    state.videos = videos
  },
  DELETE_VIDEO(state, videoId) {
    let videos = state.videos.filter(v => v._id != videoId)

    state.videos = videos
  },
  LIKE_VIDEO(state, video) {
    state.videos.forEach(v => {
      if (v._id == video._id) {
        v.like = video.like
      }
    })
  },
  EDIT_VIDEO(state, video) {
    state.videos.forEach(v => {
      if (v._id == video._id) {
        v = video
      }
    })
  },
  LOGOUT_VIDEOS(state) {
    state.videos = []
  }
}

export const actions = {
  async loadVideos({ commit }) {
    let response = await this.$axios.get("/videos");
    let videos = response.data

    commit('SET_VIDEOS', videos)
  },
  async createVideo({ commit, rootState }, video) {
    let response = await this.$axios.post('/videos', video)
    let savedVideo = response.data;

    commit('ADD_VIDEO', savedVideo)
    commit('UPDATE_TAGS', savedVideo)

    for (let tag of rootState.tagModel.tags) {
      if (video.tagIds.includes(tag._id)) {
        await this.$axios.patch(`/tags/${tag._id}`, tag)
      }
    }
  },
  async likeVideo({ commit }, video) {
    let likeVideo = video
    likeVideo.like = !likeVideo.like

    await this.$axios.patch(`/videos/${video._id}`, likeVideo)

    commit('LIKE_VIDEO', likeVideo)
  },
  async editVideo({ commit }, video) {
    await this.$axios.patch(`/videos/${video._id}`, video)

    commit('EDIT_VIDEO', video)
  },
  async deleteVideo({ commit, rootState }, video) {
    let delVideo = video

    for (let tag of rootState.tagModel.tags) {
      if (tag.videosId.includes(delVideo._id)) {
        tag.videosId = tag.videosId.filter(id => id != delVideo._id)

        console.log(`REMOVE VIDEO FROM TAG: ${tag.name}`)

        await this.$axios.patch(`/tags/${tag._id}`, tag)
      }
    }
    await this.$axios.delete(`/videos/${delVideo._id}`)

    delVideo.tagIds = []

    commit('DELETE_VIDEO', delVideo._id)
  }
}
