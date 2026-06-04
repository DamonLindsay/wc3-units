<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { units } from '@/data/units'
import type { Unit } from '@/data/units'
import UnitCard from '@/components/UnitCard.vue'

const router = useRouter()
const selectedRace = ref<Unit['race'] | 'All'>('All')
const races: Array<Unit['race'] | 'All'> = ['All', 'Human', 'Orc', 'Undead', 'Night Elf', 'Neutral']

const filteredUnits = computed(() => {
  if (selectedRace.value === 'All') return units
  return units.filter((u) => u.race === selectedRace.value)
})

const goToUnit = (id: string) => {
  router.push({ name: 'unit-detail', params: { id } })
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-6">
    <header class="mb-6">
      <h1 class="text-2xl font-bold text-white">⚔️ Warcraft III Unit Encyclopedia</h1>
      <p class="text-sm text-gray-400">{{ filteredUnits.length }} units found</p>
    </header>

    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="race in races"
        :key="race"
        :class="[
          'px-4 py-1.5 rounded-full text-sm border cursor-pointer',
          selectedRace === race
            ? 'bg-blue-500 border-blue-500 text-white'
            : 'bg-[#1e1e2e] border-gray-600 text-gray-400 hover:border-gray-400',
        ]"
        @click="selectedRace = race"
      >
        {{ race }}
      </button>
    </div>

    <div class="space-y-3">
      <div
        v-for="unit in filteredUnits"
        :key="unit.id"
        @click="goToUnit(unit.id)"
        class="cursor-pointer hover:opacity-85 transition-opacity"
      >
        <UnitCard :unit="unit" />
      </div>
    </div>
  </div>
</template>
