import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    UPDATE_POSTS(state, payload) {
      const {posts} = payload
      const postsArray = Object.keys(posts).map(key => {
        return posts[key]
      })
      state.posts = postsArray.sort((a,b) => a.publishDate - b.publishDate)
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },
  actions: { 
    getPosts({commit}) {
      commit('SET_LOADING', true)
      axios.get('http://192.168.0.16:3000/posts').then((response) => {
        commit('UPDATE_POSTS', response.data)
        commit('SET_LOADING', false)
      });
    },

  },
  modules: {
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
})
