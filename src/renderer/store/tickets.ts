import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import { Ticket, getTickets as getTicketsApi, addTicket as addTicketApi } from '../api/tickets'
import { useUserStore } from './users'
import { useRouter } from 'vue-router'

export const useTicketsStore = defineStore('tickets-store', () => {
  const usersStore = useUserStore()
  const router = useRouter()

  const tickets: Ref<Ticket[]> = ref([])

  const getTickets = async () => {
    if (!(await usersStore.checkAccesToken())) router.push('/')
    tickets.value = await getTicketsApi(usersStore.accesToken)
  }

  const addTicket = async (date: string) => {
    console.log('store', date)
    if (!(await usersStore.checkAccesToken())) router.push('/')
    await addTicketApi(date, usersStore.accesToken)
    await getTickets()
  }

  return { tickets, getTickets, addTicket }
})
