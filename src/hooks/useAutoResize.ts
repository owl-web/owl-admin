import { ref } from 'vue'
import { isElement, once, debounce } from 'lodash'
export function useAutoResize() {
  const domRef = ref<HTMLElement | null>()
  const width = 1920

  /* 绑定domRef */
  function getRefDom(ref: HTMLElement | ComponentPublicInstance): HTMLElement | null {
    // ref指向dom，则返回ref
    // isElement检查指定的值是否为DOM元素
    if (isElement(ref)) {
      return ref as HTMLElement
    }
    // 若ref指向组件实例，通过$el获取dom元素
    if (isElement((ref as ComponentPublicInstance).$el)) {
      return (ref as ComponentPublicInstance).$el
    }
    return null
  }

  function initDom(dom: HTMLElement) {
    const { clientWidth = 0, clientHeight = 0 } = dom || {}
    if (!dom) {
      console.warn('获取dom节点失败，组件渲染可能异常!')
      return
    } else if (!clientWidth) {
      console.warn('组件宽度或高度为0px，可能会出现渲染异常!')
      return
    }
    // 设置缩放比例
    if (typeof setAppScale === 'function') setAppScale(dom)
  }

  function initConfig(dom: HTMLElement) {
    // const { width, height } = screen || {}
    dom.style.width = `${width}px`
    // dom.style.height = `${height}px`
  }

  function setAppScale(dom: HTMLElement) {
    const currentWidth = document.body.clientWidth
    // const { width } = screen || {}
    dom.style.transform = `scale(${currentWidth / width})`
  }

  function observerDomResize(dom: HTMLElement, callback: () => void) {
    const observer = new MutationObserver(callback)
    observer.observe(dom, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    })
    return observer
  }

  const handleInitDom = () => {
    initDom(domRef.value)
  }
  const domSizeEffectDisposer: (() => void)[] = []
  const debounceInitDomFun = debounce(handleInitDom, 500)
  onMounted(() => {
    initDom(domRef.value)
    initConfig(domRef.value)
    let observer: MutationObserver | null = observerDomResize(domRef.value, debounceInitDomFun)
    window.addEventListener('resize', debounceInitDomFun)
    domSizeEffectDisposer.push(
      () => {
        if (!observer) return
        observer.disconnect()
        observer.takeRecords()
        observer = null
      },
      () => {
        window.removeEventListener('resize', debounceInitDomFun)
      }
    )
  })

  onUnmounted(() => {
    domSizeEffectDisposer.forEach((disposer) => disposer())
  })

  const autoBindRef = once((ref: HTMLElement | ComponentPublicInstance) => {
    const dom = getRefDom(ref)
    if (!dom) {
      console.warn('绑定组件domRef失败！')
      return
    }
    domRef.value = dom
  })
  return {
    autoBindRef
  }
}
