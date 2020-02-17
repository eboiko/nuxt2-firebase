import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (process.server && process.static) {
      return
    }
    if (!req.headers.cookie) {
      return
    }
    const cookie = cookieparser.parse(req.headers.cookie)
    const userInfo = cookie.userInfo ? JSON.parse(cookie.userInfo) : null
    if (userInfo) {
      commit('user/setUserInfo', userInfo)
    }
  }
}
