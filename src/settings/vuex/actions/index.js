const setSettings = ({
  commit
}, payload) => {
  commit('SET_SETTINGS', payload);
};

const actions = {
  setSettings
};

export default {
  actions
};
