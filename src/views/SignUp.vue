<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import PageTemplate from '@/layouts/PageTemplate.vue'

import TextInput from '@/components/TextInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'

import CloseIcon from '@/assets/images/close.svg'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
   router.push('/sign-in')
}
</script>

<template>
   <PageTemplate>
      <template #header>
         <span><CloseIcon /></span>
         <h2>Sign Up</h2>
         <router-link to="/sign-in">Login</router-link>
      </template>

      <form @submit.prevent="handleRegister">
         <TextInput id="name" v-model="name" placeholder="Name" />
         <TextInput id="email" v-model="email" placeholder="Email" />
         <PasswordInput id="password" v-model="password" required placeholder="Password" />

         <div class="buttons">
            <button class="primary" type="submit">Sign Up</button>
            <button class="secondary">Forgot your password?</button>
         </div>
      </form>

      <p v-if="error">{{ error }}</p>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

form {
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 1rem;
   flex-grow: 1;

   .buttons {
      margin-top: auto;
      display: flex;
      flex-direction: column;
   }
}
</style>
