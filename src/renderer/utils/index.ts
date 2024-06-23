export default class Utils {
  static getCurrentLocale(): string {
    return navigator?.language?.split('-')[0] || 'en'
  }

  static async openExternal(url: string): Promise<void> {
    await window.mainApi.send('msgOpenExternalLink', url)
  }

  static async openFile(type: string): Promise<any> {
    return window.mainApi.invoke('msgOpenFile', type)
  }
}

export const { getCurrentLocale, openExternal, openFile } = Utils

export const getCookie = (value: string): string | null => {
  return (
    (document.cookie.match('(^|; )' + encodeURIComponent(value) + '=([^;]+)') || []).pop() || null
  )
}

export const TOKEN_COOKIE = 'access_token'
