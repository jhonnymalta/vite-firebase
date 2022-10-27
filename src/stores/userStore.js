import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore("user", {
  state: () => ({
    usuario: "jotalandes@hotmail.com",
  }),
  getters: {
    maiusula(state) {
      return state.usuario.toUpperCase();
    },
  },
  actions: {
    registerUser(name) {
      this.usuario = name;
    },
  },
});
