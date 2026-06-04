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
