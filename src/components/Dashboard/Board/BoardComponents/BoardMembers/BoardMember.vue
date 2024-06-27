<template>
  <div class="flex gap-4 shadow-lg p-2 rounded-md">
    <div
      class="rounded-full bg-[#00000017] py-2.5 px-3 text-[#0F77FA] font-semibold"
    >
      {{ avatar(name) }}
    </div>
    <div class="grow self-center">{{ name }}</div>
    <button class="bg-[#00000017] text-[#0F77FA] rounded-full p-2 text-xs px-4">
      {{ position }}
    </button>
  </div>
</template>

<script>
    export default {
        name: "BoardMember",
        props: ["name", "position"],
        methods: {
            avatar() {
                let words = this.name.split(" ");
                let avt = "";
                words.forEach((word) => avt+=word[0]);
                return avt.toUpperCase();
            }
        }
    }
</script>
