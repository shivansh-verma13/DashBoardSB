<template>
  <div class="home-page">
    <navbar />
    <div class="hero-section">
      <div class="text-container px-16 w-1/2">
        <h1 class="text-5xl font-bold text-white leading-tight">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </h1>
        <p class="text-lg text-[#9ABFFF] mt-4">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <button
          class="login-button mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200"
        >
          Get Started »
        </button>
      </div>
    </div>
  </div>
  <about-section />
  <services />
  <core-technologies />
  <foot />
</template>

<script>
import Navbar from "../components/HomePage/Navbar.vue";
import AboutSection from "../components/HomePage/AboutSection.vue";
import Services from "../components/HomePage/Services.vue";
import CoreTechnologies from "../components/HomePage/CoreTechnologies.vue";
import Foot from "../components/HomePage/Footer.vue";
import Login from "./Login.vue";
import Dashboard from "./Dashboard.vue";

export default {
  name: "HomePage",
  components: {
    Navbar,
    AboutSection,
    Services,
    CoreTechnologies,
    Foot,
    Login,
    Dashboard,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

.home-page {
  overflow-x: hidden;
}

.login-button {
  font-family: "Mulish", sans-serif;
}

.hero-section {
  background-image: url("../assets/rocket.png");
  background-size: cover; /* Ensures the image scales proportionally */
  background-repeat: no-repeat;
  background-position: right;
  background-color: #0e77ff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
}

.text-container {
  margin-right: 20px;
  z-index: 1;
}
</style>
