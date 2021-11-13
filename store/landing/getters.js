import utils from '~/utils'

export const getAbout = (state, getters, rootState) =>
  utils.cutString(rootState.about.about, 150) + ' ...'

export const getCommunity = (state, getters, rootState) =>
  rootState.about.community.map((x) => ({
    name: x.name,
    desc: utils.cutString(x.desc, 100) + ' ...',
    imageUrl: x.imageUrl,
    slug: x.slug,
  }))

export const getContact = (state) => state.contact
export const getTestimonial = (state) => state.testimonial
export const getFooterCommunity = (state) => state.footerCommunity
