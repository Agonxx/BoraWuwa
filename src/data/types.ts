export type ElementKey = 'aero' | 'electro' | 'fusion' | 'glacio' | 'havoc' | 'spectro';

export interface ElementInfo {
  label: string;
  color: string;
}

export type WeaponTypeKey = 'sword' | 'broadblade' | 'pistols' | 'gauntlets' | 'rectifier';

export type Rarity = 4 | 5;

export interface EchoSet {
  label: string;
  cost: string;
  mainStat: string;
  subStat: string;
  slug: string;
  effect?: string;
}

export interface SynergyMember {
  id: string;
  name: string;
}

export interface SynergyPair {
  members: SynergyMember[];
  rotation: string;
  notes: string[];
}

export interface Weapon {
  name: string;
  stat: string;
  slug: string;
  pct?: number;
  isSignature?: boolean;
}

export interface PriorityChip {
  label: string;
  sep: string | null;
}

export interface CharacterDetailData {
  weapon: string;
  rarityStars: string;
  overviewBullets: string[];
  echoSets: EchoSet[];
  synergyPairs: SynergyPair[];
  weapons: Weapon[];
  priorityChips: PriorityChip[];
}

export interface Character {
  id: string;
  name: string;
  element: ElementKey;
  weaponType: WeaponTypeKey;
  rarity: Rarity;
  role?: string;
  ready: boolean;
  detail?: CharacterDetailData;
}

export interface Mechanic {
  id: string;
  name: string;
}
