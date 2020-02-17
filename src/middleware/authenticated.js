export default function ({ store, redirect, route }) {
  const user = store.state.user.userInfo
  const blockedRoute = /\/admin\/*/g
  if (!user && route.path.match(blockedRoute) !== null) {
    redirect('/')
  }
}
