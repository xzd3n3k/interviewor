<script setup lang="ts">
import imagePlaceholder from "@/assets/img/image_placeholder.svg";
import FeatureCard from "@/components/FeatureCard.vue";
</script>

<template>
  <section class="w-full flex justify-center py-24 bg-gray-50">

    <div class="w-[1100px]">

      <!-- heading -->
      <div class="text-center mb-16">
        <p class="text-sm text-gray-500 mb-3">Features</p>

        <h2 class="text-5xl font-bold mb-4">
          What makes us different
        </h2>

        <p class="text-gray-600">
          No names, no fear. Speak freely about your interview.
        </p>
      </div>

      <div class="grid grid-cols-3 gap-8">
        <FeatureCard heading="Anonymous interview experiences" button-text="Learn">
          Share what your interview was really like, without exposure or regret.
        </FeatureCard>

        <FeatureCard heading="Compare promises vs. reality" button-text="Compare">
          See how companies present themselves during hiring and what candidates actually experience.
        </FeatureCard>

        <FeatureCard heading="Real insights from real candidates" button-text="Explore">
          No HR polish. Just honest interview experiences.
        </FeatureCard>

        <FeatureCard heading="Know what to expect before you apply" button-text="Discover">
          Discover how companies truly treat candidates in the hiring process.
        </FeatureCard>

        <FeatureCard heading="Did they actually follow up?" button-text="Find out">
          Find out if companies respond after interviews, reject professionally, or simply ghost candidates.
        </FeatureCard>
      </div>

    </div>

  </section>
</template>
