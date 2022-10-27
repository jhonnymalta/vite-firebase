<template>
  <div>
    <h1>Login: {{ useStore.maiusula }}</h1>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
const useStore = useUserStore();
</script>

<style lang="scss" scoped></style>
