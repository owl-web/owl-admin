import { createApp } from 'vue'
import app from './App.vue'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import "./style/reset.css"
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import router from './router/index'
import storge from './utils/storge'
import http from './utils/http'
import store from './store'
import mock from './server/mock/test'
import { createPinia } from 'pinia'
import './style/index.scss'



mock()

 

const App = createApp(app)
const pinia = createPinia()

App.config.globalProperties.$http = http
App.config.globalProperties.$storge = storge


App.use(router).use(store).use(pinia).use(ElementPlus).mount('#app')





 
