<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "../components/layouts/NavBar.vue";
</script>

<template>
  <div class="main-layout min-h-screen">
    <NavBar />
    <div class="pt-10 mx-auto">
      <RouterView />
    </div>
  </div>
</template>
