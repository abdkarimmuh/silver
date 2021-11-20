export default function () {
  return {
    page: 1,
    maxPage: 1,
    limit: 10,
    total: 0,
    blogList: [],
    categoryList: [],
    detailBlog: {
      id: '',
      title: '',
      content: '',
      imageUrl: '',
      postedDate: '',
      category: [],
      authorName: '',
      authorImageUrl: '',
    },
  }
}
