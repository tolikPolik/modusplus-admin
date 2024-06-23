<template>
  <div class="container" style="padding: 40px">
    <h3 class="h1"> #{{ user?.id }} </h3>
    <input v-model="login" type="text" placeholder="Логин" />
    <password-input v-model="password" placeholder="Пароль" />
    <button>Сохранить</button>
    <button style="margin: 10px">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import PasswordInput from '@/renderer/components/layout/PasswordInput.vue'
import { User } from '@/renderer/api/auth'
import { defineProps, ref, Ref } from 'vue'

const props = defineProps<{
  user: User
}>()

const login: Ref<string> = ref(props.user?.login)
const password: Ref<string> = ref(props.user?.password)
</script>
