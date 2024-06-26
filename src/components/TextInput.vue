<script setup>
import { defineEmits } from 'vue'

const { id, placeholder } = defineProps({
   id: String,
   placeholder: String,
   modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = event => {
   emit('update:modelValue', event.target.value)
}
</script>

<template>
   <div class="form-item">
      <input :id="id" :value="modelValue" @input="updateValue($event)" :placeholder="placeholder" />
   </div>
</template>

<style scoped lang="scss">
.form-item {
   width: 100%;
}
</style>
