import { ElMessageBox } from 'element-plus'

export const useMsgDialog = () => {
  /**
   * @description info提示
   * @param content 内容
   * @param title 标题
   */
  function infoMsgDialog(content: string, title?: string, option?: Object) {
    return ElMessageBox.confirm(content, title || '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      center: true,
      showClose: false,
      type: 'info',
      icon: 'el-message-box-icon--info',
      ...option
    })
  }

  /**
   * @description success提示
   * @param content 内容
   * @param title 标题
   */
  function successMsgDialog(content: string, title?: string, option?: Object) {
    return ElMessageBox.confirm(content, title || '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      center: true,
      showClose: false,
      showCancelButton: false,
      type: 'success',
      icon: 'el-message-box-icon--success',
      ...option
    })
  }

  /**
   * @description error提示
   * @param content 内容
   * @param title 标题
   */
  function errorMsgDialog(content: string, title?: string, option?: object) {
    return ElMessageBox.confirm(content, title || '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      center: true,
      showClose: false,
      showCancelButton: false,
      type: 'error',
      icon: 'el-message-box-icon--error',
      ...option
    })
  }

  /**
   * @description warning提示
   * @param content 内容
   * @param title 标题
   */
  function warningMsgDialog(content: string, title?: string, option?: object) {
    return ElMessageBox.confirm(content, title || '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      center: true,
      showClose: false,
      type: 'warning',
      icon: 'el-message-box-icon--warning',
      ...option
    })
  }

  return {
    infoMsgDialog,
    successMsgDialog,
    errorMsgDialog,
    warningMsgDialog
  }
}
