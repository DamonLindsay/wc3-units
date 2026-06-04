<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string | number
  icon: string
}>()

const emit = defineEmits<{
  statClicked: [label: string, value: string | number]
}>()

const handleClick = () => {
  emit('statClicked', props.label, props.value)
}
</script>

<template>
  <div
    @click="handleClick"
    class="bg-[#1e1e2e] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors"
  >
    <p class="text-xs text-gray-500 mb-2">{{ icon }} {{ label }}</p>
    <p class="text-2xl font-bold text-white">{{ value }}</p>
  </div>
</template>
