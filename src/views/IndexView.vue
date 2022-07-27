<script setup lang="ts">
import SearchFormVue from "@/components/form/SearchForm.vue";
</script>

<template>
  <div
    class="relative bg-light-blue-800 h-300px w-full text-center text-white pt-20"
  >
    <div class="text-3xl font-bold">ENJOYING YOUR TRIP TODAY</div>
    <div class="text-lg">LET'S US HELPS YOU!</div>
    <div class="flex justify-center">
      <div class="absolute -bottom-52">
        <SearchFormVue />
      </div>
    </div>
  </div>
</template>
