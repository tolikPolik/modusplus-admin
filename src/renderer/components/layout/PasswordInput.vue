<template>
  <div class="panel">
    <input
      v-model="password"
      :type="isHide ? 'text' : 'password'"
      :placeholder="placeholder"
      class="textBox"
      @input="emit('update:modelValue', password)"
    />
    <div class="tooltip df">
      <div>
        <button @click="isHide = !isHide">
          <eye-on v-if="isHide" class="eye-svg" />
          <eye-off v-if="!isHide" class="eye-svg" />
        </button>
      </div>
      <!-- <span class="tooltiptext">Скрывать/показывать пароль</span> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import EyeOn from '../svg/eye-on.vue'
import EyeOff from '../svg/eye-off.vue'
import { Ref, ref } from 'vue'

const props = defineProps(['modelValue', 'placeholder'])

// <{
//   modelValue: string
//   placeholder?: string
// }>

const emit = defineEmits(['update:modelValue'])

const password = ref(props.modelValue)
const placeholder = ref(props.placeholder ?? 'Пароль')
const isHide: Ref<boolean> = ref(false)
</script>

<style scoped lang="scss">
.panel {
  display: flex;
}

.textBox {
  display: flex;
  width: 130px;
}

input {
  width: 0px;
}

button {
  margin: 10px;
  width: 42px;
  height: 42px;
}

.eye-svg {
  width: 20px;
  height: 20px;
  fill: #cccccc;
  position: relative;
  left: -8px;
  top: 2px;
}
</style>
