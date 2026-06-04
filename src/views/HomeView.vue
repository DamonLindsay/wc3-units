<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { units } from '@/data/units'
import type { Unit } from '@/data/units'
import UnitCard from '@/components/UnitCard.vue'

const router = useRouter()
const route = useRoute()

const selectedRace = ref<Unit['race'] | 'All' | 'Heroes'>('All')
const races: Array<Unit['race'] | 'All' | 'Heroes'> = [
  'All',
  'Heroes',
  'Human',
  'Orc',
  'Undead',
  'Night Elf',
  'Neutral',
]

const goBack = () => {
  router.push({ name: 'race-select' })
}

watch(selectedRace, (newRace) => {
  router.replace({ name: 'home', query: { race: newRace } })
})

const searchTerm = ref('')
const searchResults = ref(units)

onMounted(() => {
  const raceQuery = route.query.race as string
  if (raceQuery && races.includes(raceQuery as Unit['race'])) {
    selectedRace.value = raceQuery as Unit['race']
  }
})

watch([searchTerm, selectedRace], ([newSearch, newRace]) => {
  searchResults.value = units.filter((unit) => {
    const matchesRace =
      newRace === 'All' ? true : newRace === 'Heroes' ? unit.isHero : unit.race === newRace
    const matchesSearch = unit.name.toLowerCase().includes(newSearch.toLowerCase())
    return matchesRace && matchesSearch
  })
})

const filteredUnits = computed(() => searchResults.value)

const goToUnit = (id: string) => {
  router.push({ name: 'unit-detail', params: { id } })
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-6">
    <button
      @click="goBack"
      class="mb-4 text-xs text-gray-500 hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors"
    >
      ← Back to Faction Select
    </button>

    <header class="mb-6">
      <h1 class="text-2xl font-bold text-white">⚔️ Warcraft III Unit Encyclopedia</h1>
      <p class="text-sm text-gray-400">{{ filteredUnits.length }} units found</p>
    </header>

    <div class="mb-4">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search units..."
        class="w-full px-4 py-2 rounded-lg bg-[#1e1e2e] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
    </div>

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
