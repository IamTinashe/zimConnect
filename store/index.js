import axios from 'axios';
const BASEUrl = process.env.baseUrl;

export const state = () => ({
  auth: {
    loggedIn: false,
    user: null
  }
})

export const mutations = {
  SET_USER(state, user) {
    if(user === null || (typeof user === "undefined"))
      state.auth.loggedIn = false;
    else
      state.auth.loggedIn = user.loginState;

    state.auth.user = user;
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.auth.user) {
      commit('SET_USER', req.session.auth.user);
    }
  },

  async login({commit}, {email, password}) {
    let api = '/auth/login';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(BASEUrl + api, {email, password});
        let user = response.data;
        commit('SET_USER', user);
        //window.localStorage.setItem('accessToken', 'Bearer ' + user.accessToken);
        window.localStorage.setItem('id', response.data._id);
        window.localStorage.setItem('userAuthID', response.data.userAuthID);
        window.localStorage.setItem('email', response.data.email);
        window.localStorage.setItem('loggedIn', true);
        resolve(response.data);
      } catch (error) {
        reject(error.response);
      }
    })
  },

  async autoLogin({commit}, {email}){
    return new Promise(async (resolve, reject) => {
      try {
        let api = '/users/email/' + email;
        let response = await axios.get(BASEUrl + api);
        let user = response.data;
        commit('SET_USER', user);
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
    commit('SET_USER', null);
  },
}