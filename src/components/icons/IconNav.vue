<template>
  <div class="flex animate-bounce">
    <div v-for="i in 5" :key="i" class="shape"></div>
  </div>
</template>

<style scoped>
.shape {
  @apply relative w-0.5rem h-0.5rem transform rotate-45
  bg-gradient-to-tr from-light-blue-600 to-light-blue-200 mr-1.7;
}
</style>
