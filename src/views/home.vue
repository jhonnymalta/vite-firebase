<template>
  <div>
    <h1>Home</h1>
    <div>
      <h3>Bem Vindo: {{ usuario }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore.js";
const userStore = useUserStore();
var usuario = userStore.usuario;
</script>

<style lang="scss" scoped></style>
