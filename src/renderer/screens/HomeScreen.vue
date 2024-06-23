<template>
  <div class="container">
    <div class="mn">
      <a class="logo-del-transitions">Талоны</a>
      <router-link class="logo back h1" :to="'/applications'">Заявки</router-link>
      <router-link class="logo back h1" :to="'/accounts'">Аккаунты</router-link>
      <router-link class="logo back h1" :to="'/'">Выйти</router-link>
    </div>
    <hr />
    <div class="padding-lr">
      <span><b>Добавление талона:</b></span>
      <input v-model="dateToAdd" type="datetime-local" />
      <button
        class="mg-10"
        style="
          position: relative;
          left: 0px;
          top: 3px;
          margin: 0px;
          margin-left: 10px;
          margin-top: 10px;
          width: 42px;
          height: 42px;
        "
        @click="addTicket"
        ><the-plus
          style="
            width: 20px;
            height: 20px;
            fill: #cccccc;
            position: relative;
            left: -8px;
            top: 2px;
          "
      /></button>
    </div>
    <hr />
    <div class="padding">
      <div class="st cont mg-10">
        <p class="cg cl"> №</p>
        <p class="cg cl" style="position: relative; left: 25px"> Дата записи</p>
        <p class="cg cl" style="position: relative; left: 30px"> Время записи</p>
        <p class="cg cl"></p>
      </div>
      <div v-for="ticket in tickets" :key="ticket.id" class="st cont mg-10">
        <p class="cl">{{ ticket?.id }}</p>
        <p class="cl">{{ ticket?.date?.toString().split('T')[0].replaceAll('-', ' ') }}</p>
        <p class="cl">{{ ticket?.date?.toString().split('T')[1].split('.')[0] }}</p>
        <button class="w-100 cl" @click="deleteTicket(ticket?.id)"><the-trash /></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import thePlus from '../components/svg/the-plus.vue'
import theTrash from '../components/svg/the-trash.vue'
import { Ref, onMounted, ref } from 'vue'
import { useTicketsStore } from '../store/tickets'
import { useUserStore } from '@/renderer/store/users'
import { API_STR, AUTH_TYPE } from '../api/auth'
import { Ticket, addTicket as addTicketApi } from '../api/tickets'

const ticketsStore = useTicketsStore()
const usersStore = useUserStore()
const tickets: Ref<Ticket[]> = ref([])
const dateToAdd: Ref<string> = ref('')

onMounted(async () => {
  await restoreTickets()
  setInterval(async () => await restoreTickets(), 5_000)
})

const restoreTickets = async () => {
  await ticketsStore.getTickets()
  tickets.value = ticketsStore.tickets
}

const addTicket = async () => {
  console.log(0, dateToAdd.value)
  if (!dateToAdd.value) {
    return
  }
  await addTicketApi(dateToAdd.value, usersStore.accesToken)
  await restoreTickets()
}

const deleteTicket = async (id: number) => {
  const headers = new Headers()
  headers.append('authorization', `${AUTH_TYPE} ${usersStore.accesToken}`)

  try {
    const response = await fetch(`${API_STR}/tickets/${id}`, {
      method: 'DELETE',
      headers,
      redirect: 'follow'
    })
    const result = await response.text()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
  restoreTickets()
}
</script>

<style lang="scss" scoped></style>
