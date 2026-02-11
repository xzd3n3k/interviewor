<script setup lang="ts">
  import logo from "@/assets/img/logo.png";
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 w-full z-50 font-light">

    <ul class="flex items-center gap-16  text-base">
      <img :src="logo" alt="Logo" class="h-18" />
      <li class="cursor-pointer">Companies</li>
      <li class="cursor-pointer">Reviews</li>
      <li class="cursor-pointer">Submit</li>
      <li class="cursor-pointer text-[#1C2E4A] rounded-2xl bg-white px-3 py-1">More</li>
    </ul>

    <div class="flex flex-row gap-3">
      <button>Sign In</button>
      <button>Join</button>
    </div>

  </nav>
</template>

<style scoped>
  button {
    cursor: pointer;
    border: 1px solid black;
  }
</style>
