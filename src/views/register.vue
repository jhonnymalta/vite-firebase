<template>
  <div>
    <h1>Registrar</h1>
    <form @submit.prevent="handlerSubmit">
      <div>
        <input type="text" placeholder="E-mail" v-model.trim="email" />
        <input type="password" placeholder="Password" v-model.trim="password" />
        <button type="submit">Criar Usuário</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore.js";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const handlerSubmit = async () => {
  if (!email.value || password.value < 5) {
    alert(
      "Preencha todos os campos e password nao pode conter menos que 5 caracteres!"
    );
  } else {
    await userStore.registerUser(email.value, password.value);
    router.push("/");
  }
};
</script>

<style lang="scss" scoped></style>
