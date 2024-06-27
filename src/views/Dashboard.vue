<template>
  <div class="h-screen w-full bg-white flex">
    <div class="flex flex-col gap-4 p-4 shadow-2xl bg-[#fffffff2]">
      <side-navbar />
    </div>
    <div class="flex-1 p-8 m-auto w-full pb-0">
      <board />
    </div>
  </div>
</template>

<script>
import SideNavbar from "../components/Dashboard/SideNavbar/SideNavbar.vue";
import Board from "../components/Dashboard/Board/Board.vue";
export default {
  name: "Dashboard",
  components: {
    SideNavbar,
    Board,
  },
};
</script>

<style scoped></style>
