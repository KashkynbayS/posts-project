<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js'

import PageTemplate from '@/layouts/PageTemplate.vue'

import TextInput from '@/components/TextInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = () => {
   if (authStore.login(email.value, password.value)) {
      router.push('/feed')
   } else {
      error.value = 'Invalid email or password'
   }
}
</script>

<template>
   <PageTemplate>
      <template #header>
         <h2 id="login-h2">Log In</h2>
      </template>

      <form @submit.prevent="handleLogin">
         <TextInput id="email" v-model="email" required placeholder="Email" />
         <PasswordInput id="password" v-model="password" required placeholder="Password" />

         <div class="buttons">
            <button class="primary" type="submit">Log In</button>
            <button class="secondary">Forgot your password?</button>
         </div>
      </form>

      <p v-if="error">{{ error }}</p>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#login-h2 {
   text-align: center;
}

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
