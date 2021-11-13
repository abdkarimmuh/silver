import utils from '~/utils'

export const getAbout = (state, getters, rootState) =>
  utils.cutString(rootState.about.about) + ' ...'

export const getCommunity = (state, getters, rootState) =>
  rootState.about.community.map((x) => ({
    communityName: x.communityName,
    communityDesc: utils.cutString(x.communityDesc, 100) + ' ...',
    communityImageUrl: x.communityImageUrl,
    communitySlug: x.communitySlug,
  }))

export const getContact = (state) => state.contact
export const getTestimonial = (state) => state.testimonial
