const app = {
  state(){

    return {
      collapse : false
    }
    
  },
  mutations:{
    changeCollapse(state){
      state.collapse = !state.collapse 
    }
  }
}

export default app