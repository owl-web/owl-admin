const localStorageName = '_db'

export default {
  // 获取所有值
  getStorge(){
    return JSON.parse(window.localStorage.getItem(localStorageName) || '{}')
  },
  // 设置缓存
  setItem(key , value){
    let storge = this.getStorge()
    storge[key] = value
    window.localStorage.setItem(localStorageName , JSON.stringify(storge))
  },
  // 获取缓存
  getItem(key){
    let storge = this.getStorge()
    return storge[key]

  },

  // 根据key清空缓存
  clearItem(key){
    let storge = this.getStorge()
    delete storge[key]
    window.localStorage.setItem(localStorageName  , JSON.stringify(storge))
  },
  // 清空所有缓存
  clearAll(){
    window.localStorage.clear()
  }
}