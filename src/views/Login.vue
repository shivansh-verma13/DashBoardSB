<template>
  <div class="home-page">
    <div class="hero-section flex-row-reverse">
      <div class="text-container justify-self-end w-screen">
        <form
          @submit.prevent="submitForm"
          class="p-16 flex flex-col gap-4 max-w-lg text-center"
        >
          <h2 class="text-2xl font-black tracking-tight py-4">
            Login To Access Dashboard
          </h2>
          <div class="flex flex-col text-xs font-semibold relative">
            <label for="email" class="self-start"
              >Email<span class="text-[#EA1010] text-sm">*</span></label
            >
            <input
              id="email"
              type="email"
              v-model="email"
              @input="clearError('email')"
            />
            <span
              v-if="errors.email"
              class="absolute text-[#EA1010] text-xs -bottom-4"
              >{{ errors.email }}</span
            >
          </div>
          <div class="flex flex-col relative text-xs font-semibold">
            <label for="password" class="self-start"
              >Password<span class="text-[#EA1010] text-sm">*</span></label
            >
            <input
              id="password"
              type="password"
              v-model="password"
              @input="clearError('password')"
            />
            <button
              type="button"
              class="cursor-pointer absolute forgpass text-[#EA1010] font-semibold text-xs"
            >
              Forget Password?
            </button>
            <span
              v-if="errors.password"
              class="absolute text-[#EA1010] text-xs -bottom-4"
              >{{ errors.password }}</span
            >
          </div>
          <button
            class="login-button bg-white border-2 border-[#0E77FF] rounded-full self-center px-12 py-3 text-[#0E77FF]"
          >
            Login »
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../store/auth.js';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    }
  },
  methods: {
    // Form Submission
    validateForm() {
      let isValid = true;
      this.errors = {
        email: "",
        password: "",
      };
      if (!this.email) {
        this.errors.email = "Email is required.";
        isValid = false;
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = "Invalid email address.";
        isValid = false;
      }
      if (!this.password) {
        this.errors.password = "Password is required.";
        isValid = false;
      }
      return isValid;
    },
    isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    clearError(field) {
      this.errors[field] = "";
    },
    submitForm() {
      if (this.validateForm()) {
        if (this.authStore.login(this.email, this.password)) {
          alert("Login successful!");
          this.$router.push({ name: "Dashboard" });
        } else {
          alert("Login failed!");
        }
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.login-button {
  font-family: "Mulish", sans-serif;
}

.home-page {
  font-family: Arial, sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  height: max-content;
}

.hero-section {
  overflow-y: visible;
  background-image: url("../assets/Group 35699.png");
  background-size: 140vh; /* Ensures the image scales proportionally */
  background-repeat: no-repeat;
  background-position: -50% center; 
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
}

.text-container {
  max-width: 600px;
  z-index: 1;
}

input {
  padding: 12px;
  background-color: transparent;
  border: 2px solid #707070;
}

.forgpass {
  top: 0;
  right: 0;
}
</style>
