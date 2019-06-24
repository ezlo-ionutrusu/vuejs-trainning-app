export default {
  SET_USERS_DATA: (state, payload) => {
    state.usersData = payload;
  },

  DELETE_USER_DATA: (state, payload) => {
    const index = state.usersData.findIndex(user => user.PK_User == payload);
    state.usersData.splice(index, 1);
  },

  ADD_USER_DATA: (state, payload) => {
    state.usersData.push(payload);
  }

};
