import axios from 'axios'
import { adapterContact } from './adapter'

const SERVICES = axios.create({
  baseURL: process.env.mockUrl,
})

export default {
  getContact: async () => {
    try {
      const response = await SERVICES.get('/contact')
      console.debug('[RESPONSE]', '[getContact]', response)
      return adapterContact(response.data)
    } catch (error) {
      console.error('ERROR', ['getContact', error])
      throw error
    }
  },
}
