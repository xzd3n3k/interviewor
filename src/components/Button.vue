<script setup lang="ts">
  const props = defineProps<{
    label: string;
  }>();
</script>

<button :label="label">
  {{ label }}
</button>
