<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { units } from '@/data/units'

const route = useRoute()
const router = useRouter()

// useRoute gives us access to the URL params - this reads the :id from /unit/:id
const unit = computed(() => {
  return units.find((u) => u.id === route.params.id)
})

const goBack = () => {
  router.push({ name: 'home' })
}

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
  <div class="detail-page">
    <button class="back-btn" @click="goBack">← Back</button>

    <div v-if="unit" class="unit-detail">
      <div class="unit-header" :style="{ borderLeftColor: raceColour(unit.race) }">
        <h1>{{ unit.name }}</h1>
        <span class="race-tag">{{ unit.race }}</span>
        <span class="type-tag">{{ unit.type }}</span>
      </div>

      <p class="description">{{ unit.description }}</p>

      <h2>Stats</h2>
      <div class="stats-grid">
        <div class="stat-block">
          <span class="stat-label">❤️ Hit Points</span>
          <span class="stat-value">{{ unit.hp }}</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">⚔️ Damage</span>
          <span class="stat-value">{{ unit.damage }}</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">🛡️ Armour</span>
          <span class="stat-value">{{ unit.armor }}</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">🪙 Gold Cost</span>
          <span class="stat-value">{{ unit.cost.gold }}</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">🪵 Lumber Cost</span>
          <span class="stat-value">{{ unit.cost.lumber }}</span>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Unit not found.</p>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
}
.back-btn {
  background: none;
  border: 1px solid #444;
  color: #ccc;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 14px;
}
.back-btn:hover {
  background: #1e1e2e;
}
.unit-header {
  border-left: 5px solid #4a90d9;
  padding-left: 16px;
  margin-bottom: 16px;
}
h1 {
  font-size: 28px;
  margin-bottom: 8px;
}
.race-tag,
.type-tag {
  display: inline-block;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 20px;
  background: #2a2a3e;
  color: #ccc;
  margin-right: 6px;
}
.description {
  color: #aaa;
  font-size: 15px;
  margin-bottom: 24px;
  line-height: 1.6;
}
h2 {
  font-size: 16px;
  color: #888;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}
.stat-block {
  background: #1e1e2e;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.stat-label {
  font-size: 12px;
  color: #888;
}
.stat-value {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
