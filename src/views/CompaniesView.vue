<script setup lang="ts">
    const source: string[] = [
        "Jedna", "dvě", "honza", "jde"
    ];
</script>

<template>
  <div>
    <p v-for="value in source">{{ value }}</p>
  </div>
</template>

<style scoped>
</style>
