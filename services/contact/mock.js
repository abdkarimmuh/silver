const contact = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  email: 'mail@mail.com',
  phone: '0812 3456 7890',
  address: '',
}

export default {
  getContact: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(contact)
      }, 3000)
    }),
}
