import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join, resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port : 8899,
    host:'localhost',
    proxy :{
      
    }
  },

  
  // base: './',
  plugins: [vue()],
  resolve:{
    alias:[
      {
        find:'@',
        replacement: resolve(__dirname , './src')
      }
    ]
  }
})
