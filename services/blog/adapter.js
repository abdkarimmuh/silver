export const adapterBlogList = (value) => {
  const val = {
    ...value,
    maxPage: value.max_page,
    data: value.data.map((x) => {
      const val = {
        ...x,
        imageUrl: x.image_url,
        postedDate: x.posted_date,
        authorName: x.author.name,
        authorImageUrl: x.author.image_url,
      }
      delete val.image_url
      delete val.posted_date
      return val
    }),
  }
  delete val.max_page
  return val
}

export const adapterBlogDetail = (value) => {
  const val = {
    ...value,
    imageUrl: value.image_url,
    postedDate: value.posted_date,
    authorName: value.author.name,
    authorImageUrl: value.author.image_url,
  }
  delete val.image_url
  delete val.posted_date
  return val
}

export const adapterCategoryList = (value) => value
