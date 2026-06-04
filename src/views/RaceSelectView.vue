<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const races = [
  {
    id: 'Human',
    title: 'The Alliance',
    subtitle: 'Human',
    description:
      'Champions of the Light. The kingdoms of Lordaeron stand united against the darkness, their knights and mages among the most disciplined forces in Azeroth.',
    colour: '#4a90d9',
    borderColour: '#2a5fa8',
    bgColour: '#0d1f3c',
    icon: '⚔️',
    rune: 'I',
  },
  {
    id: 'Orc',
    title: 'The Horde',
    subtitle: 'Orc',
    description:
      'Born for battle. The Horde marches with honour and fury, their grunts and shamans carving a new destiny free from demonic corruption.',
    colour: '#e8253a',
    borderColour: '#a01020',
    bgColour: '#2a0a0a',
    icon: '🪓',
    rune: 'II',
  },
  {
    id: 'Undead',
    title: 'The Scourge',
    subtitle: 'Undead',
    description:
      'Death is only the beginning. The Undead Scourge spreads its plague across the land, an unstoppable tide of darkness serving the will of the Lich King.',
    colour: '#9b59b6',
    borderColour: '#6a2d8f',
    bgColour: '#1a0a2e',
    icon: '💀',
    rune: 'III',
  },
  {
    id: 'Night Elf',
    title: 'The Sentinels',
    subtitle: 'Night Elf',
    description:
      'Ancient guardians of the wild. The Night Elves have defended their forests for ten thousand years, their druids and huntresses bound to nature itself.',
    colour: '#2ecc71',
    borderColour: '#1a8a4a',
    bgColour: '#0a2a1a',
    icon: '🌙',
    rune: 'IV',
  },
]

const selectRace = (raceId: string) => {
  router.push({ name: 'home', query: { race: raceId } })
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center p-8"
    style="background: #0a0a12"
  >
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white mb-2 tracking-widest uppercase">⚔️ Warcraft III</h1>
      <p class="text-gray-500 text-sm tracking-widest uppercase">Unit Encyclopedia</p>
      <p class="text-gray-600 text-xs mt-2">Choose your faction</p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
      <div
        v-for="race in races"
        :key="race.id"
        @click="selectRace(race.id)"
        class="relative cursor-pointer group"
      >
        <!-- Book spine effect -->
        <div
          class="absolute left-0 top-0 bottom-0 w-3 rounded-l-sm"
          :style="{ backgroundColor: race.colour }"
        ></div>

        <!-- Book cover -->
        <div
          class="ml-3 rounded-r-lg border-2 p-6 h-72 flex flex-col justify-between transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
          :style="{
            backgroundColor: race.bgColour,
            borderColor: race.borderColour,
            boxShadow: `0 0 0 1px ${race.borderColour}`,
          }"
        >
          <!-- Top rune -->
          <div class="text-center">
            <div class="text-xs font-bold tracking-widest mb-3" :style="{ color: race.colour }">
              ✦ {{ race.rune }} ✦
            </div>
            <div class="text-4xl mb-3">{{ race.icon }}</div>
          </div>

          <!-- Title -->
          <div class="text-center">
            <h2 class="text-lg font-bold mb-1 tracking-wide" :style="{ color: race.colour }">
              {{ race.title }}
            </h2>
            <p class="text-xs text-gray-500 uppercase tracking-widest mb-3">{{ race.subtitle }}</p>
            <div class="w-12 h-px mx-auto mb-3" :style="{ backgroundColor: race.colour }"></div>
            <p class="text-xs text-gray-400 leading-relaxed">{{ race.description }}</p>
          </div>

          <!-- Bottom ornament -->
          <div class="text-center">
            <span class="text-xs" :style="{ color: race.colour }">✦ ✦ ✦</span>
          </div>
        </div>
      </div>
    </div>

    <p class="text-gray-700 text-xs mt-10 tracking-widest uppercase">Select a tome to begin</p>
  </div>
</template>
