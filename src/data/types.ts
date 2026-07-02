export type ElementKey = 'aero' | 'electro' | 'fusion' | 'glacio' | 'havoc' | 'spectro';

export interface ElementInfo {
  label: string;
  color: string;
}

export interface EchoSet {
  label: string;
  cost: string;
  mainStat: string;
  subStat: string;
  slug: string;
}

export interface SynergyMember {
  id: string;
  name: string;
}

export interface SynergyPair {
  members: SynergyMember[];
}

export interface Weapon {
  name: string;
  stat: string;
  slug: string;
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
  role: string;
  ready: boolean;
  detail?: CharacterDetailData;
}

export interface Mechanic {
  id: string;
  name: string;
}
