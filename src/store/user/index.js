import Cookie from 'js-cookie'

export const state = () => ({
  userInfo: null
})

export const mutations = {
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

export const actions = {
  login ({ commit }, userInfo) {
    Cookie.set('userInfo', userInfo)
    commit('setUserInfo', userInfo)
  },
  logout ({ commit }) {
    Cookie.remove('userInfo')
    commit('setUserInfo', null)
  }
}
