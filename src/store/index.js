import { createStore } from 'vuex'
import app from './app'

const store = createStore({
  modules : {
    app : app 
  }
})


export default store