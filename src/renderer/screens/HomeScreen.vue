<template>
  <div class="container">
    <div>
      <h1>Талоны</h1>
    </div>
    <hr />
    <div class="padding-lr">
      <span><b>Добавление талона:</b></span>
      <input v-model="dateToAdd" type="datetime-local" />
      <button class="mg-10" @click="addTicket"><the-plus /></button>
    </div>
    <hr />
    <div class="padding">
      <div class="st cont mg-10">
        <p class="cg cl"> №</p>
        <p class="cg cl"> Дата записи</p>
        <p class="cg cl"> Время записи</p>
        <p class="cg cl"></p>
      </div>
      <div v-for="ticket in tickets" :key="ticket.id" class="st cont mg-10">
        <p class="cl">{{ ticket.id }}</p>
        <p class="cl">{{ ticket.date.toString().split('T')[0].replaceAll('-', ' ') }}</p>
        <p class="cl">{{ ticket.date.toString().split('T')[1].split('.')[0] }}</p>
        <button class="w-100 cl"><the-trash /></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref } from 'vue'
import { Ticket, addTicket as addTicketApi } from '../api/tickets'
import { useTicketsStore } from '../store/tickets'
import theTrash from '../components/svg/the-trash.vue'
import thePlus from '../components/svg/the-plus.vue'
import { useUserStore } from '../store/users'

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
  console.log('dta', dateToAdd.value)
  if (!dateToAdd.value) {
    return
  }
  await addTicketApi(new Date(dateToAdd.value), usersStore.accesToken)
  await restoreTickets()
}
</script>

<style lang="scss" scoped>
.st {
  display: flex;
  justify-content: space-between;
  p {
    @media screen and (max-width: 1150px) {
      width: 150px;
      font-size: smaller;
    }
    @media screen and (max-width: 450px) {
      width: 50px;
      font-size: smaller;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
  }
}

.cg {
  color: var(--green-700);
}

.cont {
  border-radius: 0.75rem;
  border: 0.1rem solid;
  border-color: var(--gray-200);

  background-color: var(--secondaryBg);

  padding: 10px;
}

.cl {
  height: 100%;
  width: 150px;
  margin: auto;
}

.mg-10 {
  margin: 10px;
}

.mg-20 {
  margin: 20px;
}

.mg-a {
  margin: auto;
}

.w-100 {
  width: 75px;
}
</style>
