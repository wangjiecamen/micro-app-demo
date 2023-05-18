<template>
  <button @click="goTo">前往A页面</button>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goTo = () => {
  router.push({ name: 'APage' })
}
</script>
