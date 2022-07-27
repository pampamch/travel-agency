<script setup lang="ts">
import { ref } from "vue";
import IconNav from "../icons/IconNav.vue";

const menus = ref([
  "Flights+Hotels",
  "Hotels&Homes",
  "Flights",
  "Today's deals",
  "Apartments",
  "Activities",
]);
</script>

<template>
  <div
    class="nav-bar w-full flex fixed justify-between top-0 right-0 pt-3 pb-5 px-4 border-b border-light rounded-b-2xl shadow-lg text-true-gray-600 bg-white font-semibold text-lg z-30"
  >
    <div class="flex">
      <div class="logo font-medium mr-10">
        TRAVEL
        <IconNav />
      </div>

      <template v-for="(menu, i) in menus" :key="i">
        <!-- <router-link
              :to="menu.to"
              class="flex justify-center md:justify-start cursor-pointer font-normal text-white text-lg items-center px-4 py-2 mb-2"
            >
              <component
                v-if="menu.icon"
                :is="menu.icon"
                class="h-5 mr-0 md:mr-2"
              ></component> -->

        <span class="mr-4 text-sm font-bold flex items-center">{{ menu }}</span>
        <!-- </router-link> -->
      </template>
    </div>

    <div class="flex">
      <div
        v-for="i in ['Sigin', 'Create account']"
        :key="i"
        class="mr-4 flex items-center text-sm font-normal text-light-blue-600"
      >
        <span>{{ i }}</span>
      </div>
    </div>
  </div>
</template>
