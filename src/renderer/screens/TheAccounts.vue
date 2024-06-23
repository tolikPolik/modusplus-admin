<template>
  <div class="container">
    <div class="mn">
      <router-link class="logo back h1" :to="'/home'">Талоны</router-link>
      <router-link class="logo back h1" :to="'/applications'">Заявки</router-link>
      <a class="logo-del-transitions">Аккаунты</a>
      <router-link class="logo back h1" :to="'/'">Выйти</router-link>
    </div>
    <hr />
    <div class="container" style="padding: 40px; margin: 10px">
      <h3 class="h1"> Добавить пользователя </h3>
      <input v-model="login" type="text" placeholder="Логин" />
      <password-input v-model="password" placeholder="Пароль" />
      <button @click="registrate">Добавить</button>
    </div>
    <hr />
    <div class="padding w-100">
      <user-card v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PasswordInput from '@/renderer/components/layout/PasswordInput.vue'
import UserCard from '@/renderer/components/layout/UserCard.vue'
import { onMounted, ref, Ref } from 'vue'
import { API_STR, User } from '../api/auth'
import { useUserStore } from '@/renderer/store/users'

onMounted(() => getUsers())

const userStore = useUserStore()
const users: Ref<User[] | undefined> = ref()
const login = ref('')
const password = ref('')

const getUsers = async () => {
  const headers = new Headers()
  headers.append('authorization', `Bearer ${userStore.accesToken}`)

  try {
    const response = await fetch(`${API_STR}/users`, {
      method: 'GET',
      headers,
      redirect: 'follow'
    })
    const result = await response.json()
    console.log(result)
    users.value = result
  } catch (error) {
    console.error(error)
  }
}

const registrate = async () => {
  const headers = new Headers()
  headers.append('authorization', `Bearer ${userStore.accesToken}`)
  headers.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    login: login.value,
    password: password.value
  })

  try {
    const response = await fetch(`${API_STR}/registrate`, {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow'
    })
    const result = await response.text()
    console.log(result)
    getUsers()
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
h3 {
  font-size: x-large;
  font-style: normal;
  margin: 0;
}

.w-100 {
  width: 80%;
}

.w100 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.coll {
  flex-direction: column;
}

.center {
  display: flex;
  align-self: center;
  justify-content: center;
  margin: auto;
}
</style>
