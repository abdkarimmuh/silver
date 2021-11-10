const testimonial = [
  {
    name: 'Winda Basudara',
    title: 'Brand Ambasador RRQ',
    photoUrl:
      'https://yt3.ggpht.com/xEYn5khZSsMHR9Qp5039LC5u1jQt7SeH-eg_3dicKWeVZ0RPMVxVqOOgniRCKhiZnI0vdQkc1Dc=s900-c-k-c0x00ffffff-no-rj',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    testimonial: 'RRQ Jaya Jaya Jaya',
  },
  {
    name: 'Haruna Kawaguchi',
    title: 'Actor',
    photoUrl: 'https://asianwiki.com/images/4/43/One_Week_Friends-002.jpg',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    testimonial:
      'Cantiknya gaada lawan, Cantik banget, Damage nya ga abis abis',
  },
  {
    name: 'Kento Yamazaki',
    title: 'Actor',
    photoUrl: 'https://i.mydramalist.com/dN0b0_5f.jpg',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    testimonial: 'Cowo beruntung, kalau main film lawan cewe nya cantik semua',
  },
]

export default {
  getTestimonial: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(testimonial)
      }, 500)
    }),
}
