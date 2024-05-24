import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { IUser, signIn as signInApi, getUserInfo } from '../api/auth'
import { getCookie } from '../utils'

export const useUserStore = defineStore('user-store', () => {
  const user: Ref<IUser> = ref({
    login: '',
    role: ''
  } as IUser)
  const accesToken: Ref<string> = ref(getCookie('access_token') || '')

  const getUser = async () => {
    user.value = await getUserInfo(accesToken.value)
  }

  const checkAccesToken = async (): Promise<boolean> => {
    getUser()
    return !!user.value.login
  }

  const signIn = async (name: string, password: string): Promise<boolean> => {
    accesToken.value = await signInApi(name, password)
    document.cookie = 'access_token=' + accesToken.value
    return !!accesToken.value
  }

  return { user, accesToken, getUser, signIn, checkAccesToken }
})
