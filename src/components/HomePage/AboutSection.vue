<template>
  <div id="about" class="home-page w-full">
    <div class="hero-section flex-row-reverse w-full">
      <div class="text-container justify-self-end w-screen flex flex-col gap-2">
        <h1
          class="text-lg font-semibold text-[#0E77FF] leading-tight flex justify-start items-center gap-1"
        >
          <img class="w-6" src="../../assets/Group 35624.png" />
          ABOUT US
        </h1>
        <h1 class="text-3xl font-bold text-black leading-tight pb-2">
          Great Digital Agency
        </h1>
        <p class="text-sm max-w-sm text-black mt-4 font-medium">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <p class="text-sm max-w-sm text-black mt-4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          odio, turpis accumsan congue. Quisque blandit dui Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. In convallis porta mauris non aliquam.
        </p>
        <button
          class="mt-6 px-6 py-3 w-1/4 bg-white text-[#0E77FF] border border-[#0E77FF] font-medium rounded-full shadow-md hover:bg-gray-200"
        >
          Get Started »
        </button>
      </div>
      <div class="triangle-img-container justify-self-end">
        <img src="../../assets/Group 35698.png" />
      </div>
      <div class="rectangle-img-container justify-self-end">
        <img src="../../assets/Group 35650.png" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutSection",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.home-page {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  height: max-content
}

.hero-section {
  overflow-y: visible;
  background-image: url("../../assets/Group 35699.png");
  background-size: contain; /* Ensures the image scales proportionally */
  background-repeat: no-repeat;
  background-position: -55% center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
}

.text-container {
  max-width: 650px;
  margin-right: 20px;
  z-index: 1;
}

.triangle-img-container {
  height: 50%;
  display: flex;
  object-fit: contain;
  position: absolute;
  right: -8%;
  top: -25%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  z-index: 5;
}

.rectangle-img-container {
  height: 20%;
  width: 50%;
  display: flex;
  position: absolute;
  right: -25%;
  bottom: 20%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  z-index: 999;
}
</style>
