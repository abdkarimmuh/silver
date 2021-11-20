const Services = process.env.useMock
  ? require('~/services/blog/mock').default
  : require('~/services/blog').default

export const getBlogList = async (
  { commit, getters },
  { category = '', page = 1 }
) => {
  try {
    const limit = getters.getLimit
    const res = await Services.getBlogList({ page, limit, category })
    commit('setDataBlogList', res)
    return res
  } catch (error) {
    console.error('[BLOG]', '[getBlogList]', '[ERROR]', error)
    throw error
  }
}
export const getBlogDetail = async ({ commit }, { id = '' }) => {
  try {
    const res = await Services.getBlogDetail(id)
    commit('setDetailBlog', res)
    return res
  } catch (error) {
    console.error('[BLOG]', '[getBlogDetail]', '[ERROR]', error)
    throw error
  }
}
export const getCategoryList = async ({ commit }) => {
  try {
    const res = await Services.getCategoryList()
    commit('setCategoryList', res)
    return res
  } catch (error) {
    console.error('[BLOG]', '[getCategoryList]', '[ERROR]', error)
    throw error
  }
}
