<script setup lang="ts">
  import logo from "@/assets/img/logo.png";
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 w-full z-50 font-light">

    <ul class="flex items-center gap-10  text-base">
      <RouterLink to="/">
        <img :src="logo" alt="Logo" class="h-18" />
      </RouterLink>
      <RouterLink class="cursor-pointer" to="/companies">Companies</RouterLink>
      <RouterLink class="cursor-pointer" to="">Reviews</RouterLink>
      <RouterLink class="cursor-pointer" to="">Submit</RouterLink>
      <RouterLink class="cursor-pointer text-[#1C2E4A] rounded-2xl bg-white px-3 py-1" to="">More</RouterLink>
    </ul>

    <div class="flex flex-row gap-3">
      <button class="border border-black px-3 py-1 font-medium">Sign In</button>
      <button class="bg-black text-white px-3 py-1 font-medium">Join</button>
    </div>

  </nav>
</template>

<style scoped>
  button {
    cursor: pointer;
    border: 1px solid black;
  }

  RouterLink {
    cursor: pointer;
  }
</style>
