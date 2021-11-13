export const adapterTestimonial = (value) => {
  return value.map((x) => {
    const val = {
      ...x,
      photoUrl: x.photo_url,
    }
    delete val.photo_url
    return val
  })
}
