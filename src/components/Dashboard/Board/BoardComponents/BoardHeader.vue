<template>
  <div class="board-header flex w-full">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl">Dashboard</h1>
      <p class="text-[#8990AD]">
        Welcome back, <span class="font-bold">Andrew</span>
      </p>
    </div>
    <div class="grow flex justify-end gap-4">
      <button
        class="bg-[#0F77FA] text-white flex gap-2 p-4 h-3/5 px-6 justify-center items-center rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g id="e-add" opacity="0.7">
            <path
              id="Path_21"
              data-name="Path 21"
              d="M22,10H14V2a2,2,0,1,0-4,0v8H2a2,2,0,0,0,0,4h8v8a2,2,0,1,0,4,0V14h8a2,2,0,1,0,0-4Z"
              fill="#fff"
            />
          </g>
        </svg>
        Add Unit
      </button>
      <div class="flex gap-4 justify-center h-3/4">
        <div
          class="rounded-full p-4 bg-[#b5bad0] shadow-xl h-full px-6 text-[#0F77FA] font-black"
        >
          AJ
        </div>
        <h3 class="self-center text-lg text-[#8990AD]">Andrew Johnstons</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardHeader",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
.board-header {
  font-family: "Inter", sans-serif;
}
</style>
