import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join, resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  
  server:{
    port : 8083,
    host:'localhost',
    proxy :{
      '/api/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  },
  // base: './',
  plugins: [
    vue() 
  ],
  resolve:{
    alias:[
      {
        find:'@',
        replacement: resolve(__dirname , './src')
      }
    ]
  }
})
