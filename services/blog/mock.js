import axios from 'axios'
import {
  adapterBlogList,
  adapterBlogDetail,
  adapterCategoryList,
} from './adapter'

const SERVICES = axios.create({ baseURL: process.env.mockUrl })

export default {
  getBlogList: async ({ page, limit, category }) => {
    try {
      console.debug('[REQUEST]', '[getBlogList]', { page, limit, category })
      let response = await SERVICES.get('/blog')
      response = { ...response, page, limit }
      console.debug('[RESPONSE]', '[getBlogList]', response)
      return adapterBlogList(response.data)
    } catch (error) {
      console.error('[ERROR]', ['getBlogList'], error)
      throw error
    }
  },
  getBlogDetail: async (id) => {
    try {
      console.debug('[REQUEST]', '[getBlogDetail]', id)
      const response = await SERVICES.get('/blog_detail')
      console.debug('[RESPONSE]', '[getBlogDetail]', response)
      return adapterBlogDetail(response.data)
    } catch (error) {
      console.error('[ERROR]', ['getBlogDetail'], error)
      throw error
    }
  },
  getCategoryList: async () => {
    try {
      const response = await SERVICES.get('/category')
      console.debug('[RESPONSE]', '[getCategoryList]', response)
      return adapterCategoryList(response.data)
    } catch (error) {
      console.error('[ERROR]', ['getCategoryList'], error)
      throw error
    }
  },
}
