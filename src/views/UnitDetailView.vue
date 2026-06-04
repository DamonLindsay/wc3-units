<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { units } from '@/data/units'

const route = useRoute()
const router = useRouter()

const unit = computed(() => units.find((u) => u.id === route.params.id))

const goBack = () => router.push({ name: 'home' })

const raceColour = (race: string) => {
  const colours: Record<string, string> = {
    Human: '#4a90d9',
    Orc: '#e8253a',
    Undead: '#9b59b6',
    'Night Elf': '#2ecc71',
    Neutral: '#888888',
  }
  return colours[race] ?? '#888888'
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 min-h-screen">
    <button
      @click="goBack"
      class="mb-8 px-4 py-2 rounded border border-gray-600 text-gray-400 text-sm cursor-pointer hover:bg-[#1e1e2e] block"
    >
      ← Back
    </button>

    <div v-if="unit">
      <div class="pl-5 mb-8 border-l-4" :style="{ borderColor: raceColour(unit.race) }">
        <h1 class="text-3xl font-bold text-white mb-3">{{ unit.name }}</h1>
        <div class="flex gap-2">
          <span class="text-xs px-3 py-1 rounded-full bg-[#2a2a3e] text-gray-400">{{
            unit.race
          }}</span>
          <span class="text-xs px-3 py-1 rounded-full bg-[#2a2a3e] text-gray-400">{{
            unit.type
          }}</span>
        </div>
      </div>

      <p class="text-gray-400 text-sm leading-relaxed mb-10">{{ unit.description }}</p>

      <h2 class="text-xs uppercase tracking-widest text-gray-500 mb-4">Stats</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div class="bg-[#1e1e2e] border border-gray-700 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-2">❤️ Hit Points</p>
          <p class="text-2xl font-bold text-white">{{ unit.hp }}</p>
        </div>
        <div class="bg-[#1e1e2e] border border-gray-700 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-2">⚔️ Damage</p>
          <p class="text-2xl font-bold text-white">{{ unit.damage }}</p>
        </div>
        <div class="bg-[#1e1e2e] border border-gray-700 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-2">🛡️ Armour</p>
          <p class="text-2xl font-bold text-white">{{ unit.armor }}</p>
        </div>
        <div class="bg-[#1e1e2e] border border-gray-700 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-2">🪙 Gold Cost</p>
          <p class="text-2xl font-bold text-white">{{ unit.cost.gold }}</p>
        </div>
        <div class="bg-[#1e1e2e] border border-gray-700 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-2">🪵 Lumber Cost</p>
          <p class="text-2xl font-bold text-white">{{ unit.cost.lumber }}</p>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-400">Unit not found.</div>
  </div>
</template>
