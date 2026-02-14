<script setup lang="ts">
  import imagePlaceholder from "@/assets/img/image_placeholder.svg";
</script>

<template>
  <section class="w-full flex justify-center py-16 bg-gray-50">
    <div class="w-[1100px] border-2 border-black flex">
      <div class="w-1/2 p-16 flex flex-col justify-center gap-6 bg-white">
        <h1 class="text-5xl font-bold leading-tight">
          Know the truth <br />
          about where you <br />
          interview
        </h1>
        <p class="text-gray-600 max-w-md">
          Read honest reviews from candidates who've been there. Get the real story
          about salary, culture, and whether companies live up to their promises during the hiring process.
        </p>
        <div class="flex gap-4 mt-2">
          <button class="bg-black text-white px-6 py-3 font-medium">
            Explore
          </button>
          <button class="border border-black px-6 py-3 font-medium">
            Submit
          </button>
        </div>
      </div>
      <div class="w-1/2 bg-gray-200 flex items-center justify-center">
        <img
            :src="imagePlaceholder"
            alt="placeholder"
            class="w-24 opacity-60"
        />
      </div>
    </div>
  </section>
</template>
