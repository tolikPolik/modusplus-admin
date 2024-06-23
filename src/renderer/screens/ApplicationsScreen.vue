<template>
  <div class="container">
    <div class="mn">
      <router-link :to="'/home'" class="logo back h1">Талоны</router-link>
      <a class="logo-del-transitions">Заявки</a>
      <router-link class="logo back h1" :to="'/accounts'">Аккаунты</router-link>
      <router-link class="logo back h1" :to="'/'">Выйти</router-link>
    </div>
    <hr />
    <div class="padding w-100">
      <the-application
        v-for="application in applications"
        :key="application?.id"
        :application-data="application"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheApplication from '@/renderer/components/layout/TheApplication.vue'
import { Ref, onMounted, ref } from 'vue'
import { API_STR, Application } from '../api/auth'
import { useUserStore } from '@/renderer/store/users'

const userStore = useUserStore()
const applications: Ref<Application[]> = ref([])

onMounted(async () => {
  const headers = new Headers()
  console.log(0, userStore.accesToken)
  headers.append('authorization', `Bearer ${userStore.accesToken}`)
  try {
    const response = await fetch(API_STR + '/applications', {
      method: 'GET',
      headers,
      redirect: 'follow'
    })
    applications.value = await response.json()
    console.log(applications.value)
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="scss">
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
