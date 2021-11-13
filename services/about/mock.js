import axios from 'axios'
import { adapterAbout, adapterCommunity, adapterOrganizer } from './adapter'

const SERVICES = axios.create({
  baseURL: process.env.mockUrl,
})

export default {
  getAbout: async () => {
    try {
      const response = await SERVICES.get('/about')
      console.debug('[RESPONSE]', '[getAbout]', response)
      return adapterAbout(response.data)
    } catch (error) {
      console.error('ERROR', ['getAbout', error])
      throw error
    }
  },
  getCommunity: async () => {
    try {
      const response = await SERVICES.get('/community')
      console.debug('[RESPONSE]', '[getCommunity]', response)
      return adapterCommunity(response.data)
    } catch (error) {
      console.error('ERROR', ['getCommunity', error])
      throw error
    }
  },
  getCommunityDetail: async (param) => {
    try {
      const response = await SERVICES.get('/community?slug=' + param)
      console.debug('[RESPONSE]', '[getCommunityDetail]', response)
      return adapterCommunity(response.data)[0]
    } catch (error) {
      console.error('ERROR', ['getCommunityDetail', error])
      throw error
    }
  },
  getOrganizer: async () => {
    try {
      const response = await SERVICES.get('/organizer')
      console.debug('[RESPONSE]', '[getOrganizer]', response)
      return adapterOrganizer(response.data)
    } catch (error) {
      console.error('ERROR', ['getOrganizer', error])
      throw error
    }
  },
}
