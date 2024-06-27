<template>
  <div class="w-full">
    <board-header />
    <board-summary />
    <board-stats />
    <board-members />
  </div>
</template>

<script>
import BoardHeader from "./BoardComponents/BoardHeader.vue";
import BoardSummary from "./BoardComponents/BoardSummary.vue";
import BoardStats from "./BoardComponents/BoardStats.vue";
import BoardMembers from "./BoardComponents/BoardMembers/BoardMembers.vue";
export default {
  name: "Board",
  components: {
    BoardHeader,
    BoardSummary,
    BoardStats,
    BoardMembers,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
* {
  font-family: "Inter", sans-serif;
}
</style>
