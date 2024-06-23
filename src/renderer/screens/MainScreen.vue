<template>
  <div class="container">
    <div class="padding-lr">
      <h1>Вход</h1>
    </div>
    <hr />
    <div class="fliex-column padding-bt">
      <input v-model="login" type="text" placeholder="Логин" />
      <password-input v-model="password" placeholder="Пароль"></password-input>
      <button @click="signIn">Войти</button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import PasswordInput from '@/renderer/components/layout/PasswordInput.vue'
import { useI18n } from 'vue-i18n'
import { onMounted, ref, watch } from 'vue'
import { useUserStore } from '../store/users'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()
const { locale, availableLocales } = useI18n()
const languages = ref(['en'])
const appVersion = ref('Unknown')
const login = ref('')
const password = ref('')
const token = ref()

onMounted(async () => {
  languages.value = availableLocales
  handleChangeLanguage('ru')
  getApplicationVersionFromMainProcess()
  // if (await store.checkAccesToken()) {
  //   router.push('/home')
  // }
})

watch(token, () => {
  router.push('/home')
})

const getApplicationVersionFromMainProcess = (): void => {
  window.mainApi.invoke('msgRequestGetVersion').then((result: string) => {
    appVersion.value = result
  })
}

const handleChangeLanguage = (val): void => {
  locale.value = val
}

const signIn = async () => {
  store.signIn(login.value, password.value).then((x) => {
    token.value = x
    router.push('/home')
  })
}
</script>

<style lang="scss" scoped></style>
