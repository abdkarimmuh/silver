import utils from '~/utils'

export const adapterAbout = (value) => {
  const val = {
    ...value,
    youtubeUrl: value.video_youtube,
  }
  delete val.video_youtube
  return val
}

export const adapterCommunity = (value) => {
  return value.map((x) => ({
    name: x.name,
    desc: x.desc,
    imageUrl: x.image_url,
    slug: x.slug,
    organizer: x.organizer.map((y) => {
      const val = {
        ...y,
        imageUrl: y.image_url,
      }
      delete val.image_url
      return val
    }),
  }))
}

export const adapterOrganizer = (value) => {
  const res = value.map((x) => {
    const val = {
      ...x,
      imageUrl: x.image_url,
    }
    delete val.image_url
    return val
  })

  return utils.groupBy(res, 'division')
}
