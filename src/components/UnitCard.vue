<script setup lang="ts">
import type { Unit } from '@/data/units'

defineProps<{
  unit: Unit
}>()

const raceColour = (race: Unit['race']) => {
  const colours: Record<Unit['race'], string> = {
    Human: '#4a90d9',
    Orc: '#e8a020',
    Undead: '#9b59b6',
    'Night Elf': '#2ecc71',
    Neutral: '#888888',
  }
  return colours[race]
}
</script>

<template>
  <div class="unit-card">
    <div class="race-bar" :style="{ backgroundColor: raceColour(unit.race) }"></div>
    <div class="unit-body">
      <div class="unit-header">
        <h2>{{ unit.name }}</h2>
        <span class="badge">{{ unit.race }}</span>
      </div>
      <p class="description">{{ unit.description }}</p>
      <div class="stats">
        <div class="stat">
          ❤️ <strong>{{ unit.hp }}</strong> HP
        </div>
        <div class="stat">
          ⚔️ <strong>{{ unit.damage }}</strong> DMG
        </div>
        <div class="stat">
          🛡️ <strong>{{ unit.armor }}</strong> Armour
        </div>
        <div class="stat">
          🪙 <strong>{{ unit.cost.gold }}</strong> Gold
        </div>
        <div class="stat">
          🪵 <strong>{{ unit.cost.lumber }}</strong> Lumber
        </div>
        <div class="stat">
          🗡️ <strong>{{ unit.type }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.unit-card {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  background: #1e1e2e;
  border: 1px solid #333;
  margin-bottom: 12px;
}
.race-bar {
  width: 6px;
  flex-shrink: 0;
}
.unit-body {
  padding: 14px 16px;
  flex: 1;
}
.unit-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}
h2 {
  margin: 0;
  font-size: 16px;
  color: #fff;
}
.badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 20px;
  background: #333;
  color: #ccc;
}
.description {
  font-size: 13px;
  color: #aaa;
  margin: 0 0 10px;
}
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.stat {
  font-size: 13px;
  color: #ddd;
  background: #2a2a3e;
  padding: 4px 10px;
  border-radius: 4px;
}
</style>
