<script setup lang="ts">
  import logo from "@/assets/img/logo.png";
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 w-full z-50 font-light">

    <ul class="flex items-center gap-10  text-base">
      <img :src="logo" alt="Logo" class="h-18" />
      <RouterLink to="/companies">Companies</RouterLink>
      <RouterLink to="">Reviews</RouterLink>
      <RouterLink to="">Submit</RouterLink>
      <RouterLink to="">More</RouterLink>
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
