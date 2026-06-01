<script setup lang="ts">
import { ref, computed } from 'vue'
import { units } from '@/data/units'
import type { Unit } from '@/data/units'
import UnitCard from '@/components/UnitCard.vue'

const selectedRace = ref<Unit['race'] | 'All'>('All')

const races: Array<Unit['race'] | 'All'> = ['All', 'Human', 'Orc', 'Undead', 'Night Elf', 'Neutral']

const filteredUnits = computed(() => {
  if (selectedRace.value === 'All') return units
  return units.filter((u) => u.race === selectedRace.value)
})
</script>
>

<template>
  <div class="app">
    <header>
      <h1>⚔️ Warcraft III Unit Encyclopedia</h1>
      <p>{{ filteredUnits.length }} units found</p>
    </header>

    <div class="filters">
      <button
        v-for="race in races"
        :key="race"
        :class="{ active: selectedRace === race }"
        @click="selectedRace = race"
      >
        {{ race }}
      </button>
    </div>

    <div class="unit-list">
      <UnitCard v-for="unit in filteredUnits" :key="unit.id" :unit="unit" />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #13131f;
  color: #fff;
  font-family: sans-serif;
}
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
}
header {
  margin-bottom: 20px;
}
h1 {
  font-size: 24px;
  margin-bottom: 4px;
}
header p {
  color: #888;
  font-size: 14px;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
button {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid #444;
  background: #1e1e2e;
  color: #ccc;
  cursor: pointer;
  font-size: 13px;
}
button.active {
  background: #4a90d9;
  border-color: #4a90d9;
  color: #fff;
}
</style>
