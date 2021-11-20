import axios from 'axios'
import { adapterTestimonial } from './adapter'

const SERVICES = axios.create({ baseURL: process.env.mockUrl })

export default {
  getTestimonial: async () => {
    try {
      const response = await SERVICES.get('/testimonial')
      console.debug('[RESPONSE]', '[getTestimonial]', response)
      return adapterTestimonial(response.data)
    } catch (error) {
      console.error('[ERROR]', ['getTestimonial'], error)
      throw error
    }
  },
}
