import tem from 'template_js'
import { SM4 } from 'gm-crypto'
import CryptoJS from 'crypto-js'
import { getToken, getZeroUsertoken } from '@/utils/util'
import Base64 from '@/libs/base64'
import { parseQuery } from '@/utils'
import { useRouter, useRoute } from 'vue-router'

export default function useOpenPage() {
  const $router = useRouter()
  const $route = useRoute()
  const $req = inject('req') as AxiosData

  //打开应用
  const openApp = (data) => {
    const lastStr = data.ljdz[data.ljdz.length - 1]
    if (data.dkfs === '01') {
      if (lastStr == '/') {
        window.location.href = data.ljdz
        return
      }
      const index = data.ljdz.indexOf('/#/')
      if (data.ljdz.indexOf('http') === 0 || index > 1) {
        window.location.href = data.ljdz
      } else {
        let url = ''
        if (!data.ljdz.includes('application')) {
          url = '/application' + data.ljdz.substring(data.ljdz.indexOf('?'))
        } else {
          url = data.ljdz.slice(index + 2)
        }
        $router.push(url)
      }
    } else {
      jumpOutlink(data.ljdz)
    }
  }

  //打开外部链接
  const jumpOutlink = async (url) => {
    const { user } = await $req.get({
      url: getZfbaAjblRoot('/user/info')
    })
    const key = '0123456789abcdeffedcba9876543210'
    let idCard
    const req = Object.assign({}, $route.query)
    const method = parseQuery(url).method
    if (parseQuery(url) && method == 'sm4') {
      idCard = SM4.encrypt(user.idCard, key, {
        inputEncoding: 'utf8',
        outputEncoding: 'base64'
      })
    } else if (parseQuery(url) && method == 'base64') {
      idCard = Base64.encode(user.idCard)
    } else {
      idCard = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(user.idCard))
    }
    const temValue = {
      user: user,
      req: req,
      token: getToken(),
      idCard: idCard,
      rzzx_usertoken: getZeroUsertoken()
    }
    tem.config({ sTag: '{{', eTag: '}}', escape: true })
    const urlstr = tem(url, temValue)

    const lastStr = urlstr[urlstr.length - 1]
    if (lastStr == '/' || urlstr.indexOf('http') >= 0) {
      window.open(urlstr)
      return
    }
    openNewWindow(urlstr)
  }

  //打开新窗口
  const openNewWindow = (url) => {
    if (url.indexOf('#') >= 0) {
      window.open(url)
    } else {
      window.open(`#${url}`)
    }
  }

  //打开新窗口页面
  const openNewPage = (path, query = {}) => {
    const { href } = $router.resolve({
      path,
      query
    })
    window.open(href, '_blank')
  }

  return {
    openApp,
    openNewWindow,
    openNewPage,
    jumpOutlink
  }
}
