<script setup lang="ts">
  import imagePlaceholder from "@/assets/img/image_placeholder.svg";

  const props = defineProps({
    heading: String,
    buttonText: String,
    buttonLink: String,
  });
</script>

<template>
  <div class="bg-gray-600 text-white p-8 flex flex-col gap-4 min-h-[260px]">
    <img :src="imagePlaceholder" class="w-8 opacity-80" />

    <h3 class="text-2xl font-semibold">
      {{ props.heading }}
    </h3>

    <p class="text-gray-200 text-sm">
      <slot></slot>
    </p>

    <div class="mt-auto text-sm opacity-90 flex items-center gap-2">
      {{ props.buttonText }} →
    </div>
  </div>
</template>
