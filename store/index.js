import axios from 'axios';
const BASEUrl = process.env.baseUrl;

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },

  async login({commit}, {username, password}) {
    let api = '/api/auth/signin';
    try {
      const {data} = await axios.post(BASEUrl + api, {username, password})
      commit('SET_USER', data)
    }catch(error) {
      if (error.response) 
        throw new Error(error.response)
    }
  },
  
  async logout({commit}) {
    commit('SET_USER', null)
  },
}