<template>
  <div
    class="side-navbar flex flex-col gap-4 text-[#b5bad0] font-semibold h-full"
  >
    <div
      class="nav-item hover:shadow-lg p-4 flex flex-col gap-3 hover:text-black"
    >
      <metrics />Dashboard
    </div>
    <div
      class="nav-item hover:shadow-lg p-4 flex flex-col gap-3 hover:text-black"
    >
      <analytics />Analytics
    </div>
    <div
      class="nav-item hover:shadow-lg p-4 flex flex-col gap-3 hover:text-black"
    >
      <currency />Trading
    </div>
    <div
      class="nav-item hover:shadow-lg p-4 flex flex-col gap-3 hover:text-black"
    >
      <sound-wave />Notifications
    </div>
    <div class="grow"></div>
    <div
      @click="logout"
      class="nav-item hover:shadow-lg p-4 flex flex-col gap-3 hover:text-black justify-end"
    >
      <logout />Logout
    </div>
  </div>
</template>

<script>
import Metrics from "./NavIcons/Metrics.vue";
import SoundWave from "./NavIcons/SoundWave.vue";
import Currency from "./NavIcons/Currency.vue";
import Analytics from "./NavIcons/Analytics.vue";
import Logout from "./NavIcons/Logout.vue";
import { useAuthStore } from "../../../store/auth.js";
export default {
  name: "SideNavbar",
  components: {
    Metrics,
    SoundWave,
    Currency,
    Analytics,
    Logout,
  },
  methods: {
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
      // Redirect after logout
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
.side-navbar {
  font-family: "Inter", sans-serif;
}
.nav-item {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

/* Hover effect targeting the SVG */
.nav-item:hover svg g#metrics > *,
.nav-item:hover svg g#sound-wave > *,
.nav-item:hover svg g#currency-exchange-2 > *,
.nav-item:hover svg g#analytics > *,
.nav-item:hover svg g#logout > * {
  stroke: #1f64ff;
}
.nav-item:hover svg g#currency-exchange-2 > #Path_3,
.nav-item:hover svg g#currency-exchange-2 > #Path_4,
.nav-item:hover svg g#currency-exchange-2 > #Path_5 {
  fill: #1f64ff;
}
</style>
