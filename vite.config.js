import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join, resolve} from 'path'
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({

  
  server:{
    port : 8899,
    host:'localhost',
    proxy :{
      
    }
  },
  // base: './',
  plugins: [
    vue() ,       
    viteMockServe({
      // default
      mockPath: "./src/server/mock",
      supportTs: false
    })
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
