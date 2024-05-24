<template>
  <div class="container">
    <div class="padding-lr">
      <h1>Вход</h1>
    </div>
    <hr />
    <div class="fliex-column padding-bt">
      <input v-model="login" type="text" placeholder="Логин" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button @click="signIn">Войти</button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import { useUserStore } from '../store/users'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()
const { locale, availableLocales } = useI18n()
const languages = ref(['en'])
const appVersion = ref('Unknown')
const login = ref('')
const password = ref('')

onMounted(async () => {
  languages.value = availableLocales
  handleChangeLanguage('ru')
  getApplicationVersionFromMainProcess()
  if (await store.checkAccesToken()) {
    router.push('/home')
  }
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
  const token = await store.signIn(login.value, password.value)
  if (token) router.push('/home')
}
</script>

<style lang="scss" scoped></style>
