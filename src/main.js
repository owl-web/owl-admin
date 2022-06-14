import { createApp } from 'vue'
import app from './App.vue'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import router from './router/index'
import storge from './utils/storge'
import http from './utils/http'
console.log(import.meta.env)

const App = createApp(app)

App.config.globalProperties.$http = http
App.config.globalProperties.$storge = storge


App.use(router).use(ElementPlus).mount('#app')



