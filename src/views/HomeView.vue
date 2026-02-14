<script setup lang="ts">
  import HeroMain from "@/components/HeroMain.vue";
  import HeroFeatures from "@/components/HeroFeatures.vue";
</script>

<template>
  <!-- Hero -->
  <section
      id="home"
      class="relative min-h-screen w-full bg-no-repeat bg-cover bg-center"
  >
    <HeroMain/>
  </section>

  <!-- Features -->
  <section id="about" class="bg-white w-full min-h-screen p-8">
    <HeroFeatures/>
  </section>
</template>

<style scoped>
.logo {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
