export const setDataBlogList = (state, value) => {
  state.page = value.page
  state.maxPage = value.maxPage
  state.limit = value.limit
  state.total = value.total
  state.blogList = value.data
}
export const setPage = (state, value) => (state.page = value)
export const setMaxPage = (state, value) => (state.maxPage = value)
export const setLimit = (state, value) => (state.limit = value)
export const setTotal = (state, value) => (state.total = value)
export const setBlogList = (state, value) => (state.blogList = value)
export const setCategoryList = (state, value) => (state.categoryList = value)
export const setDetailBlog = (state, value) => {
  state.detailBlog.id = value.id
  state.detailBlog.title = value.title
  state.detailBlog.content = value.content
  state.detailBlog.imageUrl = value.imageUrl
  state.detailBlog.postedDate = value.postedDate
  state.detailBlog.category = value.category
  state.detailBlog.authorName = value.authorName
  state.detailBlog.authorImageUrl = value.authorImageUrl
}
