<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>
      <q-tabs v-model="tab" class="bg-primary text-white">
        <q-route-tab name="home" to="/" label="Home" />
        <q-route-tab name="about" to="/about" label="About" />
        <q-route-tab name="cobtact" to="/contact" label="Contact" />
        <q-route-tab to="/page3" label="Services" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("home"),
    };
  },
};
</script>

<style></style>
