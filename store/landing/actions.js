const ServicesContact = process.env.useMock
  ? require('~/services/contact/mock').default
  : require('~/services/contact').default

const ServicesTestimonial = process.env.useMock
  ? require('~/services/testimonial/mock').default
  : require('~/services/testimonial').default

export const getContact = async ({ commit }) => {
  try {
    const res = await ServicesContact.getContact()
    commit('setInstagram', res.instagram)
    commit('setTwitter', res.twitter)
    commit('setFacebook', res.facebook)
    commit('setEmail', res.email)
    commit('setPhone', res.phone)
    commit('setAddress', res.address)
    return res
  } catch (error) {
    console.error('[LANDING]', '[getContact]', '[ERROR]', error)
    throw error
  }
}

export const getTestimonial = async ({ commit }) => {
  try {
    const res = await ServicesTestimonial.getTestimonial()
    commit('setTestimonial', res)
    return res
  } catch (error) {
    console.error('[LANDING]', '[getTestimonial]', '[ERROR]', error)
    throw error
  }
}

export const getAbout = async ({ dispatch }) => {
  await dispatch('about/getAbout', null, { root: true })
}

export const getAllDataLanding = async ({ dispatch }) => {
  await dispatch('getContact')
  await dispatch('getTestimonial')
  await dispatch('about/getAbout', null, { root: true })
  await dispatch('about/getCommunity', null, { root: true })
}
