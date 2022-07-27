<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<template>
  <TabGroup>
    <TabList>
      <Tab
        v-for="i in 3"
        :key="i"
        v-slot="{ selected }"
        as="template"
        class="bg-white p-7 rounded-lg border-0 shadow-lg shadow-gray-700 mr-3"
      >
        <button
          :class="[selected ? 'bg-blue-500 text-white' : 'bg-white text-black']"
        >
          Tab 1
        </button>
      </Tab>
    </TabList>
    <TabPanels class="text-black">
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
