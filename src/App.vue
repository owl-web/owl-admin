

<template>
  <router-view />
</template>
<script>
import {getData} from './api/index'
import t from './utils/storge'
export default{
  created(){
    // console.log('------nnnnn------')
    // getData()
    this.tsStorge()
  },
  methods:{
    tsStorge(){

    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
