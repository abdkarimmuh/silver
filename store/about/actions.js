const Services = process.env.useMock
  ? require('~/services/about/mock').default
  : require('~/services/about').default

export const getAbout = async ({ commit }) => {
  try {
    const res = await Services.getAbout()
    commit('setAbout', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getAbout]', '[ERROR]', error)
    throw error
  }
}

export const getHistory = async ({ commit }) => {
  try {
    const res = await Services.getHistory()
    commit('setHistory', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getHistory]', '[ERROR]', error)
    throw error
  }
}

export const getVission = async ({ commit }) => {
  try {
    const res = await Services.getVission()
    commit('setVission', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getVission]', '[ERROR]', error)
    throw error
  }
}

export const getMission = async ({ commit }) => {
  try {
    const res = await Services.getMission()
    commit('setMission', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getMission]', '[ERROR]', error)
    throw error
  }
}

export const getCommunity = async ({ commit }) => {
  try {
    const res = await Services.getCommunity()
    commit('setCommunity', res)
    return res
  } catch (error) {
    console.error('[ABOUT]', '[getCommunity]', '[ERROR]', error)
    throw error
  }
}
