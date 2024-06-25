<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
   router.push('/login')
}
</script>

<template>
   <h1>Welcome to Feed Page!</h1>
</template>
