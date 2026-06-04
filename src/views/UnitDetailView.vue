<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { units } from '@/data/units'
import StatCard from '@/components/StatCard.vue'

const route = useRoute()
const router = useRouter()
const unit = computed(() => units.find((u) => u.id === route.params.id))
const lastClicked = ref('')
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

const onStatClicked = (label: string, value: string | number) => {
  lastClicked.value = `${label}: ${value}`
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
      <!-- Header -->
      <div class="pl-5 mb-6 border-l-4" :style="{ borderColor: raceColour(unit.race) }">
        <div class="flex items-center gap-3 mb-2">
          <h1 class="text-3xl font-bold text-white">{{ unit.name }}</h1>
          <span
            v-if="unit.isHero"
            class="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black font-bold"
            >Hero</span
          >
        </div>
        <div class="flex gap-2">
          <span class="text-xs px-3 py-1 rounded-full bg-[#2a2a3e] text-gray-400">{{
            unit.race
          }}</span>
          <span class="text-xs px-3 py-1 rounded-full bg-[#2a2a3e] text-gray-400">{{
            unit.type
          }}</span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-gray-300 text-sm leading-relaxed mb-8">{{ unit.description }}</p>

      <!-- Lore -->
      <div class="mb-8 p-4 rounded-lg bg-[#1a1a2e] border border-gray-800 italic">
        <h2 class="text-xs uppercase tracking-widest text-gray-500 mb-3 not-italic">📖 Lore</h2>
        <p class="text-gray-400 text-sm leading-relaxed">{{ unit.lore }}</p>
      </div>

      <!-- Strengths and Weaknesses -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div class="p-4 rounded-lg bg-[#1a2a1a] border border-green-900">
          <h2 class="text-xs uppercase tracking-widest text-green-500 mb-3">✅ Strengths</h2>
          <ul class="space-y-2">
            <li
              v-for="strength in unit.strengths"
              :key="strength"
              class="text-sm text-gray-300 flex gap-2"
            >
              <span class="text-green-500 mt-0.5">+</span>
              {{ strength }}
            </li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-[#2a1a1a] border border-red-900">
          <h2 class="text-xs uppercase tracking-widest text-red-500 mb-3">❌ Weaknesses</h2>
          <ul class="space-y-2">
            <li
              v-for="weakness in unit.weaknesses"
              :key="weakness"
              class="text-sm text-gray-300 flex gap-2"
            >
              <span class="text-red-500 mt-0.5">-</span>
              {{ weakness }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats -->
      <h2 class="text-xs uppercase tracking-widest text-gray-500 mb-4">Stats</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard icon="❤️" label="Hit Points" :value="unit.hp" @statClicked="onStatClicked" />
        <StatCard icon="⚔️" label="Damage" :value="unit.damage" @statClicked="onStatClicked" />
        <StatCard icon="🛡️" label="Armour" :value="unit.armor" @statClicked="onStatClicked" />
        <StatCard
          icon="🪙"
          label="Gold Cost"
          :value="unit.cost.gold"
          @statClicked="onStatClicked"
        />
        <StatCard
          icon="🪵"
          label="Lumber Cost"
          :value="unit.cost.lumber"
          @statClicked="onStatClicked"
        />
      </div>

      <div
        v-if="lastClicked"
        class="mt-6 p-3 rounded bg-[#1e1e2e] border border-gray-700 text-sm text-gray-400"
      >
        Last clicked: <span class="text-white">{{ lastClicked }}</span>
      </div>
    </div>
    <div v-else class="text-gray-400">Unit not found.</div>
  </div>
</template>
