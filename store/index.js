import { Store } from 'vuex'
import about from './about'
import blog from './blog'
import news from './news'
import landing from './landing'
import ui from './ui'

const createStore = () => {
  return new Store({
    modules: {
      about,
      blog,
      news,
      landing,
      ui,
    },
  })
}

export default createStore
