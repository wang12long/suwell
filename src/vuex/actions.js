const actions = {
  showLeftMenu ({ commit }, status) {
    commit('showLeftMenu', status)
  },
  showSecondMenu ({ commit }, status) {
    commit('showSecondMenu', status)
  },
  preSelect ({ commit }, status) {
    commit('preSelect', status)
  },
  isLoading ({ commit }, status) {
    commit('isLoading', status)
  },
  setMenus({ commit }, menus) {
    commit('setMenus', menus)
  },
}
export default actions
