import { useRouter } from 'vue-router'
import Base64 from '@/libs/base64'

type myCode = 'jqzt' | 'ajzt' | 'fyfh' | 'xctj' | 'gjpc' | 'dccf' | 'xzss'

export default function useJumpZt() {
  const $router = useRouter()

  //跳转总台
  const jumpZt = (code: myCode, ywbh: string) => {
    const params = {
      code: code,
      ywbh: ywbh
    }
    const routeUrl = $router.resolve({
      path: '/zfba/zt',
      query: {
        params: Base64.encode(params)
      }
    })
    window.open(routeUrl.href, '_blank')
  }

  return {
    jumpZt
  }
}
