<template>
  <div class="st cont mg-10 coll">
    <div>
      <h3 class="h1"> {{ description }}</h3>
      <h3 class="h1">Описание</h3>
      <span>{{ applicationData?.description }}</span>
    </div>
    <div>
      <h3 class="h1">Статус</h3>
      <select v-model="stat">
        <option v-for="(status, idx) in statuses" :key="idx" :value="status.name">{{
          status.locale
        }}</option>
      </select>
      <input
        v-if="stat === 'refused'"
        v-model="refusedDescription"
        type="text"
        placeholder="Причина отклонения"
      />
    </div>
    <div>
      <h3 class="h1">Специалист</h3>
      <input v-model="specialist" type="text" placeholder="ФИО" />
    </div>
    <div>
      <button class="center" @click="apply">Применить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref, Ref, ComputedRef } from 'vue'
import { API_STR, Application, getUserById, IUser } from '../../api/auth'
import { useUserStore } from '@/renderer/store/users'

const userStore = useUserStore()
const props = defineProps<{
  applicationData?: Application
}>()

const statuses: Ref<
  {
    name: string
    locale: string
  }[]
> = ref([
  {
    name: 'open',
    locale: 'Открыта'
  },
  {
    name: 'inProcess',
    locale: 'В процессе'
  },
  {
    name: 'closed',
    locale: 'Закрыта'
  },
  {
    name: 'refused',
    locale: 'Отклонена'
  }
])
const currentUser: Ref<IUser | undefined> = ref()

const stat: Ref<string> = ref(props.applicationData?.status ?? 'open')
const refusedDescription: Ref<string | undefined> = ref(props.applicationData?.refusedDescription)
const specialist: Ref<string | undefined> = ref(props.applicationData?.specialist)

const description: ComputedRef<string> = computed(
  () =>
    `#${props.applicationData?.id} ${props.applicationData?.filling
      .toString()
      .replaceAll('-', ' ')
      .replaceAll('T', '/')
      .slice(0, 16)} ${currentUser.value?.login}`
)

onMounted(async () => {
  if (!props.applicationData?.senderId) return
  currentUser.value = await getUserById(props.applicationData?.senderId)
})

const apply: () => Promise<void> = async (): Promise<void> => {
  const headers: Headers = new Headers()
  headers.append('authorization', `Bearer ${userStore.accesToken}`)
  headers.append('Content-Type', 'application/json')

  const raw: string = JSON.stringify({
    status: stat.value,
    specialist: specialist.value,
    refusedDescription: refusedDescription.value
  })

  try {
    const response: Response = await fetch(`${API_STR}/applications/${props.applicationData?.id}`, {
      method: 'PUT',
      headers,
      body: raw,
      redirect: 'follow'
    })
    const result: string = await response.text()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
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
