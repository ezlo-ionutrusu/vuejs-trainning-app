import getters from './getters/index';
import actions from './actions/index';
import state from './state/index';
import mutations from './mutations/index';

const login = {
  ...state,
  mutations,
  ...getters,
  ...actions,
  namespaced: true,
};
export default login;
