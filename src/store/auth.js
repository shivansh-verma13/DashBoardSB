import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login(email, password) {
      // Simulating login
      if (email.length > 0 && password.length > 0) {
        this.isAuthenticated = true;
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});
