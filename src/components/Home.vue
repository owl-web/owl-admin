<template>
  <div>
    <h1>HomeE</h1>
    {{name}}
    {{zz}}
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import {getData} from '@/api/index.js'

export default defineComponent({
  setup() {
    console.log('bb')
    getData().then(res=>{
       console.log(res)
      
    })
    let name = ref("qaq");
     return {
      name,
    };
  },
});
</script>

