import utils from '~/utils'

export const getPage = (state) => state.page
export const getMaxPage = (state) => state.maxPage
export const getLimit = (state) => state.limit
export const getTotal = (state) => state.total
export const getBlogList = (state) =>
  state.blogList.map((x) => ({
    id: x.id,
    title: x.title,
    imageUrl: x.imageUrl,
    authorName: x.authorName,
    content: utils.cutString(x.content, 100) + ' ...',
  }))
export const getCategoryList = (state) => state.categoryList
export const getDetailBlog = (state) => ({
  ...state.detailBlog,
  content: state.detailBlog.content
    ? '<p>' + state.detailBlog.content.replace(/\r?\n/g, '</p><p>') + '</p>'
    : state.detailBlog.content,
  category: state.detailBlog.category.map((x) => x.name),
})
export const disabledPrev = (state) => state.page === 1
export const disabledNext = (state) => state.page === state.maxPage
