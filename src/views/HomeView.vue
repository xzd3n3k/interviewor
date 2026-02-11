<script setup lang="ts">
  import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- Hero -->
  <section
      id="home"
      class="relative min-h-screen w-full bg-no-repeat bg-cover bg-center"
  >
    <Navbar />
    <div class="font-bold text-6xl flex flex-col gap-2 justify-center items-center text-center">

      Know the truth about where you want to apply

    </div>
  </section>

  <!-- Features -->
  <section id="about" class="bg-white w-full min-h-screen p-8">
    <h2 class="text-3xl font-semibold mb-4">Features</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll down to see more content.
    </p>
  </section>
</template>

<style scoped>
.logo {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
