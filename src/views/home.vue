<template>
  <div>
    <h1>Home</h1>
    <div>
      <h3>Bem Vindo: {{ username }}</h3>
      <div v-show="userStore.usuario">
        <button @click="userStore.logoutUser">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore.js";
const userStore = useUserStore();
var username = userStore.usuario;
</script>

<style lang="scss" scoped></style>
