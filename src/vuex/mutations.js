const mutations = {
  showLeftMenu(state, status) {
    state.showLeftMenu = status
  },
  showSecondMenu(state, status) {
    state.showSecondMenu = status
  },
  preSelect(state, status) {
    state.preSelect = status
  },
  isLoading(state, status) {
    state.isLoading = status
  },
  setMenus(state, menus) {
    state.menus = menus
  },

}

export default mutations
