import utils from '~/utils'

export const getAbout = (state) => state.about
export const getHistory = (state) => {
  if (state.history) {
    return '<p>' + state.history.replace(/\r?\n/g, '</p><p>') + '</p>'
  }
  return '<p>' + state.history + '</p>'
}
export const getVission = (state) => state.vission
export const getMission = (state) => {
  if (state.mission) {
    return '<p>' + state.mission.replace(/\r?\n/g, '</p><p>') + '</p>'
  }
  return '<p>' + state.mission + '</p>'
}
export const getCommunity = (state) =>
  state.community.map((x) => ({
    name: x.name,
    desc: utils.cutString(x.desc, 100) + ' ...',
    imageUrl: x.imageUrl,
    slug: x.slug,
  }))

export const getYoutubeUrl = (state) => state.youtubeUrl
export const getOrganizer = (state) => state.organizer
export const getCommunityDetail = (state) => state.communityDetail
