export interface Unit {
  id: string
  name: string
  race: 'Human' | 'Orc' | 'Undead' | 'Night Elf' | 'Neutral'
  type: 'Melee' | 'Ranged' | 'Caster' | 'Siege'
  hp: number
  damage: string
  armor: number
  cost: { gold: number; lumber: number }
  description: string
}

export const units: Unit[] = [
  {
    id: 'footman',
    name: 'Footman',
    race: 'Human',
    type: 'Melee',
    hp: 420,
    damage: '12-13',
    armor: 2,
    cost: { gold: 135, lumber: 0 },
    description: 'Stalwart defenders of the Alliance.  Cheap, durable and reliable.',
  },
  {
    id: 'rifleman',
    name: 'Rifleman',
    race: 'Human',
    type: 'Ranged',
    hp: 505,
    damage: '19-21',
    armor: 0,
    cost: { gold: 205, lumber: 30 },
    description: 'Dwarven marksmen equipped with long rifles.  Excellent against air units.',
  },
  {
    id: 'grunt',
    name: 'Grunt',
    race: 'Orc',
    type: 'Melee',
    hp: 700,
    damage: '19-21',
    armor: 1,
    cost: { gold: 200, lumber: 0 },
    description: 'The backbone of the Orcish Horde.  High HP and powerful melee attacks.',
  },
  {
    id: 'headhunter',
    name: 'Troll Headhunter',
    race: 'Orc',
    type: 'Ranged',
    hp: 500,
    damage: '17-19',
    armor: 0,
    cost: { gold: 145, lumber: 20 },
    description: 'Troll warriors who hurl throwing spears at their enemies.',
  },
  {
    id: 'ghoul',
    name: 'Ghoul',
    race: 'Undead',
    type: 'Melee',
    hp: 340,
    damage: '15-16',
    armor: 0,
    cost: { gold: 120, lumber: 0 },
    description: 'Fast and cheap undead units that can harvest lumber.',
  },
  {
    id: 'cryptfiend',
    name: 'Crypt Fiend',
    race: 'Undead',
    type: 'Ranged',
    hp: 500,
    damage: '21-27',
    armor: 3,
    cost: { gold: 215, lumber: 40 },
    description: 'Spider-like undead that shoot webs to ground air units.',
  },
  {
    id: 'archer',
    name: 'Archer',
    race: 'Night Elf',
    type: 'Ranged',
    hp: 280,
    damage: '14-15',
    armor: 0,
    cost: { gold: 130, lumber: 10 },
    description: 'Elven archers with the ability to go invisible at night.',
  },
  {
    id: 'huntress',
    name: 'Huntress',
    race: 'Night Elf',
    type: 'Ranged',
    hp: 525,
    damage: '18-22',
    armor: 1,
    cost: { gold: 195, lumber: 20 },
    description: 'Fast mounted warriors riding sabers.  Can only attack ground units.',
  },
]
