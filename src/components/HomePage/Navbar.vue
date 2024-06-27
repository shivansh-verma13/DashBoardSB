<template>
  <nav class="bg-[#0E77FF] w-screen flex items-center py-12 px-32 pb-0">
    <div class="flex-grow text-white text-lg font-normal">
      <span class="cursor-pointer hover:text-black">LOGO</span>
    </div>
    <ul class="flex space-x-8 text-white">
      <li v-for="(link, index) in links" :key="index">
        <a :href="`#${link.url}`" class="hover:text-black">{{ link.name }}</a>
      </li>
    </ul>
    <a
      href="/login"
      class="bg-white text-black px-10 py-2 rounded hover:bg-gray-200 ml-8"
      >Login</a
    >
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { name: "About", url: "about" },
        { name: "Services", url: "services" },
        { name: "Case Studies", url: "case-studies" },
        { name: "Testimonials", url: "case-studies" },
        { name: "Contact", url: "contact" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
