<script setup lang="ts">
import type { Unit } from '@/data/units'

defineProps<{
  unit: Unit
}>()

const raceColour = (race: Unit['race']) => {
  const colours: Record<Unit['race'], string> = {
    Human: '#4a90d9',
    Orc: '#e8253a',
    Undead: '#9b59b6',
    'Night Elf': '#2ecc71',
    Neutral: '#888888',
  }
  return colours[race]
}
</script>

<template>
  <div class="flex overflow-hidden rounded-lg bg-[#1e1e2e] border border-gray-800">
    <div class="w-1.5 flex-shrink-0" :style="{ backgroundColor: raceColour(unit.race) }"></div>
    <div class="w-14 h-14 flex-shrink-0 m-3">
      <img
        :src="unit.icon"
        :alt="unit.name"
        class="w-full h-full object-cover rounded"
        onerror="this.style.display = 'none'"
      />
    </div>
    <div class="flex-1 py-3 pr-3">
      <div class="flex items-center gap-2 mb-1">
        <h2 class="text-sm font-bold text-white">{{ unit.name }}</h2>
        <span class="text-xs px-2 py-0.5 rounded-full bg-[#2a2a3e] text-gray-400">{{
          unit.race
        }}</span>
        <span
          v-if="unit.isHero"
          class="text-xs px-2 py-0.5 rounded-full bg-yellow-500 text-black font-bold"
          >Hero</span
        >
      </div>
      <p class="text-xs text-gray-400 mb-2">{{ unit.description }}</p>
      <div class="flex flex-wrap gap-1.5">
        <span class="text-xs bg-[#2a2a3e] px-2 py-0.5 rounded text-gray-300">❤️ {{ unit.hp }}</span>
        <span class="text-xs bg-[#2a2a3e] px-2 py-0.5 rounded text-gray-300"
          >⚔️ {{ unit.damage }}</span
        >
        <span class="text-xs bg-[#2a2a3e] px-2 py-0.5 rounded text-gray-300"
          >🛡️ {{ unit.armor }}</span
        >
        <span class="text-xs bg-[#2a2a3e] px-2 py-0.5 rounded text-gray-300"
          >🪙 {{ unit.cost.gold }}</span
        >
        <span class="text-xs bg-[#2a2a3e] px-2 py-0.5 rounded text-gray-300"
          >🪵 {{ unit.cost.lumber }}</span
        >
        <span class="text-xs bg-[#2a2a3e] px-2 py-0.5 rounded text-gray-300"
          >🗡️ {{ unit.type }}</span
        >
      </div>
    </div>
  </div>
</template>
