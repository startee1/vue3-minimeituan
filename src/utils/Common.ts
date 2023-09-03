export const MOBILE = 'mobile'
export const PC = 'pc'
const deviceFlag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
export const DEVICE_TYPE = deviceFlag ? MOBILE : PC