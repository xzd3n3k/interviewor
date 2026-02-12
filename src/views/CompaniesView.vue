<script setup lang="ts">
import CompanyCard from '@/components/CompanyCard.vue';

    const source: string[] = [
        "Jedna", "dvě", "honza", "jde"
    ];
</script>

<template>
  <div>
    <p v-for="value in source">{{ value }}</p>
    <CompanyCard></CompanyCard>
  </div>
</template>

<style scoped>
</style>
