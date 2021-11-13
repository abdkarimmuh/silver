export const showLoading = ({ commit }) => {
  commit('updateLoading', true)
}

export const hideLoading = ({ commit }) => {
  commit('updateLoading', false)
}

export const setActiveMenu = ({ commit }, activeMenu) => {
  commit('setActiveMenu', activeMenu)
}
