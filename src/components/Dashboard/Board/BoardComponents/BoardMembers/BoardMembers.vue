<template>
  <div class="flex p-8 pb-0 pl-0 w-full pt-4 gap-4">
    <div class="w-1/2">
      <div class="flex w-full p-2">
        <h1 class="grow text-lg font-bold">Team Members</h1>
        <button class="text-[#0F77FA] text-xs">View All</button>
      </div>
      <board-member name="Andrew Johnston" position="Top Trader" />
      <board-member name="Anna Atkinsons" position="Manager" />
      <board-member name="Mark Atkinsons" position="Top Trader" />
      <board-member name="Johanna Tairons" position="Manager" />
    </div>
    <div class="w-1/2">
      <div class="flex w-full p-2">
        <h1 class="grow text-lg font-bold">Comparison</h1>
        <button class="text-[#0F77FA] text-xs">View All</button>
      </div>
      <company-member />
    </div>
  </div>
</template>

<script>
import BoardMember from "./BoardMember.vue";
import CompanyMember from "./CompanyMember.vue";
export default {
  name: "BoardMembers",
  components: {
    BoardMember,
    CompanyMember,
  },
};
</script>
