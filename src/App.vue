<template>
  <div>
    <h2>welcome to vite+vue</h2>
    <ul>
      <router-link to="/">HOME | </router-link>
      <router-link to="/login">LOGIN | </router-link>
      <router-link to="/register">REGISTER</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
