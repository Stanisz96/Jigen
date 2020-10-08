export const state = () => ({
  tags: []
})

export const mutations = {
  SET_TAGS(state, tags) {
    state.tags = tags
  },
  ADD_TAG(state, tag) {
    let tags = state.tags.concat(tag)
    state.tags = tags
  },
  UPDATE_TAGS(state, video) {
    let tags = state.tags

    tags.forEach(tag => {
      if (video.tagIds.includes(tag._id)) {
        if (!tag.videosId.includes(video._id)) {
          tag.videosId.push(video._id)

          console.log(`ADD VIDEO TO TAG: ${tag.name}`)
        }
      } else {
        if (tag.videosId.includes(video._id)) {
          tag.videosId = tag.videosId.filter(vid => vid != video._id)

          console.log(`REMOVE VIDEO FROM TAG: ${tag.name}`)
        }
      }
    })
    state.tags = tags;
  },
  LOGOUT_TAGS(state) {
    state.tags = []
  }
}
export const actions = {
  async loadTags({ commit }) {
    console.log("Load tags")

    let response = await this.$axios.get("/tags");
    let tags = response.data

    commit('SET_TAGS', tags)
  },
  async updateTags({ commit, state }, video) {
    console.log("Update tags")

    let tags = state.tags

    for (let tag of tags) {
      if (video.tagIds.includes(tag._id)) {
        if (!tag.videosId.includes(video._id)) {
          console.log(`ADD VIDEO TO TAG: ${tag.name}`)

          tag.videosId.push(video._id)
          await this.$axios.patch(`/tags/${tag._id}`, tag)
        }
      } else {
        if (tag.videosId.includes(video._id)) {
          console.log(`REMOVE VIDEO FROM TAG: ${tag.name}`)

          tag.videosId = tag.videosId.filter(vid => vid != video._id)
          await this.$axios.patch(`/tags/${tag._id}`, tag)
        }
      }
    }
    commit('SET_TAGS', tags)
  },
  async addTags({ commit }, tags) {
    let newTags = []

    for (let tag of tags) {
      try {
        let response = await this.$axios.post('/tags', tag)
        let newTag = response.data

        console.log(`ADDED NEW TAG: ${newTag.name}`)
        commit('ADD_TAG', newTag)

        newTags = newTags.concat(newTag)

      } catch (error) {
        console.log(error)
      }
    }
    return newTags
  }
}
export const getters = {
  getTag: state => _id => {
    return state.tags.find(t => t._id == _id);
  }
}