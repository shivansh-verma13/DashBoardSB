<template>
  <div id="services" class="w-full h-screen flex justify-center">
    <div class="w-1/2 flex justify-center items-center">
      <div class="flex flex-col gap-2">
        <h1
          class="text-lg font-bold text-[#0E77FF] leading-tight flex justify-start items-center gap-1"
        >
          <img class="w-6" src="../../assets/Group 35624.png" />
          OUR SERVICES
        </h1>
        <h1 class="text-3xl font-bold max-w-sm text-black leading-tight">
          Transforming your ideas into Reality
        </h1>
        <div
          class="flex text-xs flex-wrap gap-4 font-black text-[#0E77FF] max-w-xs mt-6"
        >
          <div
            class="bg-[#16B2FF17] rounded-lg hover:bg-[#0E77FF] hover:text-white px-4 py-2.5"
          >
            Web Development
          </div>
          <div
            class="bg-[#16B2FF17] hover:bg-[#0E77FF] hover:text-white rounded-lg px-4 py-2.5"
          >
            Mobile Development
          </div>
          <div
            class="bg-[#16B2FF17] hover:bg-[#0E77FF] hover:text-white rounded-lg px-4 py-2.5"
          >
            UI/UX Designing
          </div>
          <div
            class="bg-[#16B2FF17] hover:bg-[#0E77FF] hover:text-white rounded-lg px-4 py-2.5"
          >
            Branding
          </div>
          <div
            class="bg-[#16B2FF17] hover:bg-[#0E77FF] hover:text-white rounded-lg px-4 py-2.5"
          >
            Cloud Technology
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex justify-center items-center p-2 relative">
      <div class="p-12 shadow-2xl shadow-[#16B2FF17]">
        <h1
          class="text-4xl font-bold text-black leading-tight flex justify-start items-center gap-4"
        >
          <img class="w-16" src="../../assets/Group 35621.png" />
          UI/UX Designing
        </h1>
        <p class="text-sm max-w-sm text-black font-medium mt-4">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <ul class="font-medium">
          <li class="flex gap-4 items-center justify-between py-3">
            <img src="../../assets/Group 35604.png" />Lorem ipsum dolor sit
            amet, conse ctetur adipi scing elit.
          </li>
          <li class="flex gap-4 items-center py-3">
            <img src="../../assets/Group 35604.png" />Lorem ipsum dolor sit
            amet,
          </li>
          <li class="flex gap-4 items-center py-3">
            <img src="../../assets/Group 35604.png" />conse ctetur adipi scing
            elit.
          </li>
          <li class="flex gap-4 items-center py-3">
            <img src="../../assets/Group 35604.png" />Lorem ipsum dolor sit
            amet, conse ctetur
          </li>
        </ul>
      </div>
      <div class="absolute h-screen w-1/2 bg-[#0E77FF] box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.box {
  z-index: -1;
  right: 0;
}
</style>
