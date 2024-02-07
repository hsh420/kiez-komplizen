<template>
  <h1>HOME</h1>
  <h2>Hallo, {{ displayName }}!</h2>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { toRaw } from 'vue'
const auth = useAuthStore()
const displayName = toRaw(auth.user.displayName)
</script>
