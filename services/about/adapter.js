export const adapterAbout = (value) => {
  const response = {
    ...value,
    youtubeUrl: value.video_youtube,
  }
  delete response.video_youtube
  return response
}

export const adapterCommunity = (value) => {
  return value.map((x) => ({
    communityName: x.community_name,
    communityDesc: x.community_desc,
    communityImageUrl: x.community_image_url,
    communitySlug: x.community_slug,
    communityManager: x.community_manager.map((y) => {
      const response = {
        ...y,
        imageUrl: y.image_url,
      }
      delete response.image_url
      return response
    }),
  }))
}

export const adapterOrganizer = (value) => {
  value.map((x) => {
    const response = {
      ...x,
      imageUrl: x.image_url,
    }
    delete response.image_url
    return response
  })
}
