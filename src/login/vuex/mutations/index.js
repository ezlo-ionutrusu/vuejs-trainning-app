export default {
  SET_IS_AUTH: (state, payload) => {
    state.loginDataStore.isAuth = payload;
  },
};
