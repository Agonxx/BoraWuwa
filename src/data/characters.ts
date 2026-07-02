import type { Character } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'cartethyia',
    name: 'Cartethyia',
    element: 'aero',
    role: 'Dano Principal',
    ready: true,
    detail: {
      weapon: 'Espada',
      rarityStars: '★★★★★',
      overviewBullets: [
        'Escala com HP, não com ATK',
        'Empilha Erosão Aero pra amplificar dano',
        'Melhor com Windward Pilgrimage (5 peças)',
        'Buff de ATK no time não afeta o kit dela',
      ],
      echoSets: [
        {
          label: 'Set principal (4-4-1-1-1)',
          cost: '4 / 4 / 1 / 1 / 1',
          mainStat: 'Crit. Rate / Crit. DMG',
          subStat: 'Crit Rate/DMG > HP% > Dano Base% > HP',
          slug: 'echo-a',
        },
        {
          label: 'Variante B (4-1-1-1-1)',
          cost: '4 / 1 / 1 / 1 / 1',
          mainStat: 'Crit. Rate / HP%',
          subStat: 'Crit Rate/DMG > HP% > Dano Base% > HP',
          slug: 'echo-b',
        },
        {
          label: 'Variante C (foco Aero)',
          cost: '4 / 3 / 3 / 1 / 1',
          mainStat: 'Crit. Rate / Dano Aero%',
          subStat: 'Crit Rate/DMG > HP% > Dano Base% > HP',
          slug: 'echo-c',
        },
      ],
      synergyPairs: [
        {
          members: [
            { id: 'cartethyia', name: 'Cartethyia' },
            { id: 'ciaconna', name: 'Ciaconna' },
          ],
        },
        {
          members: [
            { id: 'cartethyia', name: 'Cartethyia' },
            { id: 'sanhua', name: 'Sanhua' },
            { id: 'aero-rover', name: 'Aero Rover' },
          ],
        },
      ],
      weapons: [
        { name: 'Defier’s Thorn (sig)', stat: 'ATK 412 · HP 72,2%', slug: 'defiers-thorn' },
        { name: 'Red Spring', stat: 'ATK 587 · Crit Rate 24,3%', slug: 'red-spring' },
        { name: 'Blazing Brilliance', stat: 'ATK 587 · Crit DMG 48,6%', slug: 'blazing-brilliance' },
        { name: 'Emerald of Genesis', stat: 'ATK 587 · Crit Rate 24,3%', slug: 'emerald-of-genesis' },
        { name: 'Guardian Sword', stat: 'ATK 300 · HP 30,4%', slug: 'guardian-sword' },
      ],
      priorityChips: [
        { label: 'Circuito Forte', sep: null },
        { label: 'Liberação de Ressonância', sep: '>' },
        { label: 'Ataque Normal', sep: '>' },
        { label: 'Habilidade de Ressonância', sep: '>>' },
        { label: 'Habilidade de Introdução', sep: '=' },
      ],
    },
  },
  { id: 'jinhsi', name: 'Jinhsi', element: 'spectro', role: 'Dano Principal', ready: false },
  { id: 'changli', name: 'Changli', element: 'fusion', role: 'Dano Principal', ready: false },
  { id: 'camellya', name: 'Camellya', element: 'havoc', role: 'Dano Principal', ready: false },
  { id: 'carlotta', name: 'Carlotta', element: 'glacio', role: 'Dano Principal', ready: false },
  { id: 'zhezhi', name: 'Zhezhi', element: 'spectro', role: 'Suporte', ready: false },
  { id: 'shorekeeper', name: 'Shorekeeper', element: 'spectro', role: 'Suporte', ready: false },
  { id: 'verina', name: 'Verina', element: 'spectro', role: 'Suporte', ready: false },
  { id: 'yinlin', name: 'Yinlin', element: 'electro', role: 'Sub-DPS', ready: false },
  { id: 'calcharo', name: 'Calcharo', element: 'electro', role: 'Dano Principal', ready: false },
  { id: 'jiyan', name: 'Jiyan', element: 'aero', role: 'Dano Principal', ready: false },
  { id: 'encore', name: 'Encore', element: 'fusion', role: 'Dano Principal', ready: false },
  { id: 'xiangliyao', name: 'Xiangli Yao', element: 'electro', role: 'Dano Principal', ready: false },
  { id: 'zani', name: 'Zani', element: 'havoc', role: 'Dano Principal', ready: false },
  { id: 'roccia', name: 'Roccia', element: 'havoc', role: 'Sub-DPS', ready: false },
  { id: 'brant', name: 'Brant', element: 'fusion', role: 'Suporte', ready: false },
  { id: 'cantarella', name: 'Cantarella', element: 'havoc', role: 'Sub-DPS', ready: false },
  { id: 'augusta', name: 'Augusta', element: 'electro', role: 'Dano Principal', ready: false },
  { id: 'phoebe', name: 'Phoebe', element: 'spectro', role: 'Dano Principal', ready: false },
  { id: 'sigrika', name: 'Sigrika', element: 'aero', role: 'Dano Principal', ready: false },
  {
    id: 'phrolova',
    name: 'Phrolova',
    element: 'havoc',
    role: 'Dano Principal',
    ready: true,
    detail: {
      weapon: 'Retificador',
      rarityStars: '★★★★★',
      overviewBullets: [
        'Ataca em campo e fora dele — Hecate luta por ela enquanto ela está trocada',
        'Liberação de Ressonância custa 0 Energia, não depende de Regen de Energia',
        'Empilha Aftersound (até 24) pra Crit. DMG crescente ao longo da rotação',
        'Já tem tanto ATK próprio que buff de ATK do time rende pouco',
        'Extremamente dependente da arma-assinatura — sem ela o dano cai muito',
      ],
      echoSets: [
        {
          label: 'Dream of the Lost + Havoc Eclipse (recomendado)',
          cost: '4 / 3 / 3 / 1 / 1',
          mainStat: 'Crit. Rate / Crit. DMG',
          subStat: 'Crit Rate/DMG > ATK% > Dano de Habilidade% > ATK',
          slug: 'havoc-eclipse',
        },
        {
          label: 'Dream of the Lost + Endless Resonance',
          cost: '4 / 3 / 3 / 1 / 1',
          mainStat: 'Crit. Rate / Crit. DMG',
          subStat: 'Crit Rate/DMG > ATK% > Dano de Habilidade% > ATK',
          slug: 'endless-resonance',
        },
        {
          label: 'Dream of the Lost + Frosty Resolve',
          cost: '4 / 3 / 3 / 1 / 1',
          mainStat: 'Crit. Rate / Crit. DMG',
          subStat: 'Crit Rate/DMG > ATK% > Dano de Habilidade% > ATK',
          slug: 'frosty-resolve',
        },
      ],
      synergyPairs: [
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'lucilla', name: 'Lucilla' },
            { id: 'qiuyuan', name: 'Qiuyuan' },
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'sigrika', name: 'Sigrika' },
            { id: 'roccia', name: 'Roccia' },
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'galbrena', name: 'Galbrena' },
            { id: 'jiyan', name: 'Jiyan' },
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'phoebe', name: 'Phoebe' },
            { id: 'rover-spectro', name: 'Rover (Spectro)' },
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'danjin', name: 'Danjin' },
            { id: 'shorekeeper', name: 'Shorekeeper' },
          ],
        },
      ],
      weapons: [
        {
          name: 'Lethean Elegy (assinatura)',
          stat: '100% desempenho · ATK / Crit Rate / Dano de Habilidade / Ignora DEF',
          slug: 'lethean-elegy',
        },
        {
          name: 'Stringmaster',
          stat: '82% desempenho · ATK / Crit Rate / Dano%',
          slug: 'stringmaster',
        },
        {
          name: 'Whispers of Sirens',
          stat: '80,2% desempenho · Shred de RES Havoc no Forte',
          slug: 'whispers-of-sirens',
        },
        {
          name: 'Rime-Draped Sprouts',
          stat: '77,1% desempenho · ATK / Crit. DMG',
          slug: 'rime-draped-sprouts',
        },
        {
          name: 'Luminous Hymn',
          stat: '75,2% desempenho · ATK / Crit Rate',
          slug: 'luminous-hymn',
        },
      ],
      priorityChips: [
        { label: 'Liberação de Ressonância', sep: null },
        { label: 'Ataque Normal', sep: '>' },
        { label: 'Circuito Forte', sep: '>' },
        { label: 'Habilidade de Introdução', sep: '>>' },
        { label: 'Habilidade de Ressonância', sep: '=' },
      ],
    },
  },
];
