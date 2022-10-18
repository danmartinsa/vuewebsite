<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopBar from "./components/TopBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <TopBar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>
