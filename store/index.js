import { Store } from 'vuex'
import about from './about'
import blog from './blog'
import event from './event'
import landing from './landing'
import ui from './ui'

const createStore = () => {
  return new Store({
    modules: {
      about,
      blog,
      event,
      landing,
      ui,
    },
  })
}

export default createStore
