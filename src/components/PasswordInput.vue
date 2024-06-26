<script setup>
import { defineEmits, ref } from 'vue'

const { id, placeholder } = defineProps({
   id: String,
   placeholder: String,
   modelValue: String,
})

const showPassword = ref(false)

const emit = defineEmits(['update:modelValue'])

const updateValue = event => {
   emit('update:modelValue', event.target.value)
}

const toggleShowPassword = () => {
   showPassword.value = !showPassword.value
}
</script>

<template>
   <div class="form-item">
      <input
         :id="id"
         :type="showPassword ? 'text' : 'password'"
         :value="modelValue"
         @input="updateValue($event)"
         :required="required"
         :placeholder="placeholder"
      />
      <span class="show-password" @click="toggleShowPassword">
         {{ showPassword ? 'Hide' : 'Show' }}
      </span>
   </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.form-item {
   width: 100%;

   .show-password {
      position: absolute;
      right: 0;
      margin: 1rem 2rem 1rem 1rem;
      cursor: pointer;
      font-size: 1rem;
      color: $green;
   }
}
</style>
