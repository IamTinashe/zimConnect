export default function ({store}) {
  if (!store.auth.state.loggedIn)
    window.location.href = '/login';
}