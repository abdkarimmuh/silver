export const adapterTestimonial = (value) => {
  return value.map((x) => {
    const response = {
      ...x,
      photoUrl: x.photo_url,
    }
    delete response.photo_url
    return response
  })
}
