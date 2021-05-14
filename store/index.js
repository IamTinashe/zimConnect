import axios from 'axios';
const BASEUrl = process.env.baseUrl;

export const state = () => ({
  auth: {
    loggedIn: false,
    user: null
  }
})

export const mutations = {
  SET_USER: function (state, user, loginState) {
    state.auth.loggedIn = loginState;
    state.auth.user = user;
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.auth.user) {
      commit('SET_USER', req.session.auth.user, loginState);
    }
  },

  async login({commit}, {username, password}) {
    let api = '/api/auth/signin';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, {username, password});
        let user = {id: response.data.id, accessToken: response.data.accessToken};
        commit('SET_USER', user, true);
        window.localStorage.setItem('accessToken', 'Bearer ' + user.accessToken);
        window.localStorage.setItem('id', user.id);
        window.localStorage.setItem('loggedIn', true);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  },
  
  async logout({commit}) {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('loggedIn');
    window.localStorage.removeItem('auth.strategy');
    window.localStorage.clear(); //Just to be sure
    commit('SET_USER', null, false);
  },
}