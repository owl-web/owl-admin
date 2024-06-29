import { loadMicroApp, initGlobalState, type OnGlobalStateChangeCallback } from 'qiankun'

window.microApp = null // 微应用实例

/**
 * @description qiankun微前端hook 遵循挂载节点为ref='qiankunRef'
 * @param data.initParams // 初始化向微应用传递的参数
 * @param data.statusInit // 全局状态初始化
 * @param data.statusChange // 全局状态改变回调函数
 * @param data.contaienr // 容器
 * @param data.entry // 请求入口（路径）
 */
export default function (data: {
  initParams: { pagePath: string; [key: string]: any }
  statusInit: object
  statusChange: OnGlobalStateChangeCallback
  entry: string
  container?: HTMLElement
}) {
  const qiankunRef = ref()
  // 全局状态初始化
  const qiankunState = initGlobalState(data.statusInit)
  qiankunState.onGlobalStateChange(data.statusChange)

  if (data.container) {
    window.microApp = loadMicroApp(
      {
        name: 'sacw',
        entry: data.entry,
        container: data.container,
        props: data.initParams
      },
      {
        sandbox: { experimentalStyleIsolation: true }
      }
    )
  } else {
    onMounted(async () => {
      await nextTick()
      window.microApp = loadMicroApp(
        {
          name: 'sacw',
          entry: data.entry,
          container: qiankunRef.value,
          props: data.initParams
        },
        {
          sandbox: { experimentalStyleIsolation: true }
        }
      )
    })
  }
  return { qiankunRef, qiankunState }
}
