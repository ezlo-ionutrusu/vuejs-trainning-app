const setUsersData = ({ commit }, payload) => {
  commit('SET_USERS_DATA', payload);
};

const deleteUser = ({ commit }, payload) => {
  commit('DELETE_USER_DATA', payload);
};

const addUser = ({ commit }, payload) => {
  commit('ADD_USER_DATA', payload);
};

const actions = { setUsersData, deleteUser, addUser };

export default { actions };
