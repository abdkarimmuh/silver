const Services = process.env.useMock
  ? require('~/services/about/mock').default
  : require('~/services/about').default

export const getAbout = async ({ commit }) => {
  try {
    const res = await Services.getAbout()
    commit('setAbout', res.about)
    commit('setHistory', res.history)
    commit('setMission', res.mission)
    commit('setVission', res.vission)
    commit('setYoutubeUrl', res.youtubeUrl)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getAbout]', '[ERROR]', error)
    throw error
  }
}

export const getCommunity = async ({ commit, dispatch }) => {
  try {
    const res = await Services.getCommunity()
    commit('setCommunity', res)
    dispatch('landing/setFooterCommunity', res, { root: true })
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getCommunity]', '[ERROR]', error)
    throw error
  }
}

export const getCommunityDetail = async ({ commit }, param) => {
  try {
    const res = await Services.getCommunityDetail(param)
    commit('setCommunityDetail', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getCommunityDetail]', '[ERROR]', error)
    throw error
  }
}

export const getOrganizer = async ({ commit }) => {
  try {
    const res = await Services.getOrganizer()
    commit('setOrganizer', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getOrganizer]', '[ERROR]', error)
    throw error
  }
}
