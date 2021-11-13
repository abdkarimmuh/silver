import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'silver-landing-page',
    reducer(state) {
      const stateFilter = { ...state }
      const blackList = ['blog', 'news']

      blackList.forEach((item) => {
        delete stateFilter[item]
      })
      return stateFilter
    },
  })(store)
}
