const setWizzardData = ({ commit }, payload) => {
  commit('SET_WIZZARD_DATA', payload);
};
const setWizzardCategoryMoidels = ({ commit }, payload) => {
  commit('SET_WIZZARD_CATEGORY_MODELS', payload);
};
const actions = { setWizzardData, setWizzardCategoryMoidels };
export default { actions };
