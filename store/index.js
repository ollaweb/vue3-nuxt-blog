import axios from 'axios'

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  setPosts(state,posts){
    state.postsLoaded = posts
  },
  addPost(state, post) {
    console.log(post)
    state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  }
}

export const actions = {
  nuxtServerInit({commit}, context) {
    return axios.get('https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app//posts.json')
      .then(res => {
        const postsArray = []
        for( let key in res.data) {
          postsArray.push({...res.data[key], id:key})
        }
        commit('setPosts',postsArray)
      })
      .catch(e => console.log(e))
  },
  addPost({commit}, post) {
    return axios.post('https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app//posts.json', post)
      .then(res => {
        commit('addPost',{...post, id:res.data.name})
      })
      .catch(e => console.log(e))
  },
  editPost({commit}, post) {
    return axios.put(`https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  }
}
