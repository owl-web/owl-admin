import { createApp } from 'vue'
import app from './App.vue'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import "./style/reset.css"
import router from './router/index'
import storge from './utils/storge'
import http from './utils/http'
import store from './store'

console.log(import.meta.env)

const App = createApp(app)

App.config.globalProperties.$http = http
App.config.globalProperties.$storge = storge


App.use(router).use(store).use(ElementPlus).mount('#app')



