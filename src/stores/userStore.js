import { defineStore } from "pinia";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    usuario: null,
  }),

  actions: {
    async registerUser(email, password) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.usuario = { email: user.email, uid: user.uid };
      } catch (error) {
        console.log(error);
      }
    },

    async loginUser(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error);
      }
    },

    async logoutUser() {
      try {
        await signOut(auth);
        this.usuario = null;
      } catch (error) {
        console.log(error);
      }
    },

    currentUser() {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.usuario = {
                email: user.email,
                uid: user.uid,
              };
            } else {
              this.usuario = null;
            }
            resolve(user);
          },
          (e) => reject(e)
        );
        unsubscribe();
      });
    },
  },
});
