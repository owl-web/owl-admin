import { ElNotification } from 'element-plus'

export const useMsgBox = () => {
  /**
   * @description info提示
   * @param message 消息内容
   * @param title 标题
   */
  const infoMsgBox = (message: string, title?: string) =>
    ElNotification({ title: title || '温馨提示', message, type: 'info' })

  /**
   * @description success提示
   * @param message 消息内容
   * @param title 标题
   */
  const successMsgBox = (message: string, title?: string) =>
    ElNotification({ title: title || '温馨提示', message, type: 'success' })

  /**
   * @description error提示
   * @param message 消息内容
   * @param title 标题
   */
  const errorMsgBox = (message: string, title?: string) =>
    ElNotification({ title: title || '温馨提示', message, type: 'error' })

  /**
   * @description warning提示
   * @param message 消息内容
   * @param title 标题
   */
  const warningMsgBox = (message: string, title?: string) =>
    ElNotification({ title: title || '温馨提示', message, type: 'warning' })

  return {
    infoMsgBox,
    successMsgBox,
    errorMsgBox,
    warningMsgBox
  }
}
