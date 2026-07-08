import type { Character } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'phrolova',
    name: 'Phrolova',
    element: 'havoc',
    weaponType: 'rectifier',
    rarity: 5,
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
          rotation:
            'Phrolova (gera Notas Voláteis, invoca Hecate) → Outro → Qiuyuan (Forte/Liberação de buff) → Outro → Lucilla (dano pessoal) → repete',
          notes: [
            'Qiuyuan buffa Crit. DMG e Dano de Habilidade de Eco via Forte, Liberação e Outro',
            'Lucilla amplifica o Dano de Eco do time inteiro além do próprio dano',
            'Lucilla rende mais no 2º slot com Qiuyuan no 3º — evitar junto de The Shorekeeper',
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'sigrika', name: 'Sigrika' },
            { id: 'roccia', name: 'Roccia' },
          ],
          rotation:
            'Phrolova (Circuito Forte, invoca Hecate) → Outro → Roccia (empilha Imaginação, Liberação de buff de ATK) → Outro → Sigrika (dano de Habilidade de Eco em campo) → repete',
          notes: [
            'Roccia contribui buff de ATK pro time além do próprio dano Havoc',
            'Sigrika escala com Habilidade de Eco em campo, somando com o dano fora de campo da Hecate',
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'galbrena', name: 'Galbrena' },
            { id: 'jiyan', name: 'Jiyan' },
          ],
          rotation:
            'Phrolova (Circuito Forte, invoca Hecate) → Outro → Galbrena (cura/buff) → Outro → Jiyan (combo em campo) → repete',
          notes: [
            'Galbrena mantém o time vivo com cura/buff durante os loops de Hecate',
            'Jiyan entra como DPS de campo quando o dano de Eco do time não está disponível',
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'phoebe', name: 'Phoebe' },
            { id: 'rover-spectro', name: 'Rover (Spectro)' },
          ],
          rotation:
            'Phrolova (Circuito Forte, invoca Hecate) → Outro → Phoebe/Rover (Spectro) (combo em campo) → repete',
          notes: [
            'Phoebe e Rover (Spectro) somam dano Spectro adicional e utilidade de time',
            'Bom terceiro slot quando não há suporte de Dano de Eco disponível',
          ],
        },
        {
          members: [
            { id: 'phrolova', name: 'Phrolova' },
            { id: 'danjin', name: 'Danjin' },
            { id: 'the-shorekeeper', name: 'The Shorekeeper' },
          ],
          rotation:
            'Phrolova (Circuito Forte, invoca Hecate) → Outro → The Shorekeeper (cura/buff) → Outro → Danjin (dano em campo) → repete',
          notes: [
            'The Shorekeeper cura e buffa o time, sustentando a rotação em conteúdo mais longo',
            'Danjin assume o dano em campo enquanto Hecate ataca fora dele',
          ],
        },
      ],
      weapons: [
        {
          name: 'Lethean Elegy',
          stat: 'ATK / Crit Rate / Dano de Habilidade / Ignora DEF',
          slug: 'lethean-elegy',
          pct: 100,
          isSignature: true,
        },
        {
          name: 'Stringmaster',
          stat: 'ATK / Crit Rate / Dano%',
          slug: 'stringmaster',
          pct: 82,
        },
        {
          name: 'Whispers of Sirens',
          stat: 'Shred de RES Havoc no Forte',
          slug: 'whispers-of-sirens',
          pct: 80.2,
        },
        {
          name: 'Rime-Draped Sprouts',
          stat: 'ATK / Crit. DMG',
          slug: 'rime-draped-sprouts',
          pct: 77.1,
        },
        {
          name: 'Luminous Hymn',
          stat: 'ATK / Crit Rate',
          slug: 'luminous-hymn',
          pct: 75.2,
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

  {
    id: 'aemeath',
    name: 'Aemeath',
    element: 'fusion',
    weaponType: 'sword',
    rarity: 5,
    role: 'Dano Principal',
    ready: true,
    detail: {
      weapon: 'Espada',
      rarityStars: '★★★★★',
      overviewBullets: [
        'A maior parte do dano vem de Circuito Forte e Liberação de Ressonância — evolua essas duas primeiro',
        'Alterna entre forma humana e Mech, com dois sistemas de dano: Ruptura de Sintonia (foco single-target) e Explosão de Fusão (foco AoE)',
        'Depende de Regen de Energia alto (~120% na ficha) pra não travar sem conseguir usar a Liberação',
        'Rotação longa em campo — o combo completo existe pra soltar a Liberação de Ressonância duas vezes por ciclo',
      ],
      echoSets: [
        {
          label: 'Sigillum (principal) + Trailblazing Star (5pc)',
          cost: '4 / 3 / 3 / 1 / 1',
          mainStat: 'Crit Rate ou Crit DMG (proporção 1:2) no 4-cost · Dano Fusão/ATK% nos 3-cost · ATK% nos 1-cost',
          subStat: 'Crit DMG ≈ Crit Rate > Regen de Energia > Dano de Liberação de Ressonância',
          slug: 'trailblazing-star',
          effect:
            '2 peças: +10% Dano Fusão · 5 peças: +20% Crit Rate e +20% Dano Fusão por 8s ao causar Ruptura de Sintonia, Explosão de Fusão ou trocar de forma',
        },
      ],
      synergyPairs: [
        {
          members: [
            { id: 'aemeath', name: 'Aemeath' },
            { id: 'lynae', name: 'Lynae' },
            { id: 'mornye', name: 'Mornye' },
          ],
          rotation:
            'Aemeath entra em Ruptura de Sintonia junto com Lynae → solta o combo completo (2 Liberações) → Mornye buffa ATK e amplifica dano → repete',
          notes: [
            'Lynae e Mornye maximizam Ruptura de Sintonia e ainda somam Dano de Liberação e amplificação geral de dano',
            'Time de alvo único mais forte da Aemeath atualmente',
          ],
        },
        {
          members: [
            { id: 'aemeath', name: 'Aemeath' },
            { id: 'denia', name: 'Denia' },
            { id: 'chisa', name: 'Chisa' },
          ],
          rotation:
            'Aemeath ativa Explosão de Fusão → Denia aplica controle/dano contínuo em área → Chisa cura e buffa → repete',
          notes: [
            'Foco em AoE — bom em conteúdo com múltiplos alvos/ondas',
            'Chisa sustenta o time enquanto mantém a rotação de Fusão ativa',
          ],
        },
      ],
      weapons: [
        {
          name: 'Everbright Polestar',
          stat: '+12% Dano de Todos os Atributos · Liberação ignora 32% DEF e 10% RES Fusão por 8s após Ruptura de Sintonia ou Explosão de Fusão',
          slug: 'everbright-polestar',
          pct: 100,
          isSignature: true,
        },
        {
          name: 'Emerald of Genesis',
          stat: '+12,8% Regen de Energia · +6% ATK (até 2 stacks, 10s) ao usar Habilidade de Ressonância',
          slug: 'emerald-of-genesis',
          pct: 83.5,
        },
        {
          name: 'Red Spring',
          stat: 'ATK 587 · Crit Rate 24,3%',
          slug: 'red-spring',
          pct: 83.5,
        },
        {
          name: 'Emerald Sentence',
          stat: 'ATK 588 · Crit Rate 24,3% (assinatura da Qiuyuan, usada como stat-stick)',
          slug: 'emerald-sentence',
          pct: 83.2,
        },
        {
          name: 'Blazing Brilliance',
          stat: 'ATK 587 · Crit. DMG 48,6%',
          slug: 'blazing-brilliance',
          pct: 82.9,
        },
      ],
      priorityChips: [
        { label: 'Circuito Forte', sep: null },
        { label: 'Liberação de Ressonância', sep: '=' },
        { label: 'Habilidade de Ressonância', sep: '>' },
        { label: 'Ataque Normal', sep: '>' },
        { label: 'Habilidade de Introdução', sep: '>' },
      ],
    },
  },

  // Resto do roster (registro básico via prydwen.gg — sem guia de build ainda).
  { id: 'aalto', name: 'Aalto', element: 'aero', weaponType: 'pistols', rarity: 4, ready: false },
  { id: 'augusta', name: 'Augusta', element: 'electro', weaponType: 'broadblade', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'baizhi', name: 'Baizhi', element: 'glacio', weaponType: 'rectifier', rarity: 4, ready: false },
  { id: 'brant', name: 'Brant', element: 'fusion', weaponType: 'sword', rarity: 5, role: 'Suporte', ready: false },
  { id: 'buling', name: 'Buling', element: 'electro', weaponType: 'rectifier', rarity: 4, ready: false },
  { id: 'calcharo', name: 'Calcharo', element: 'electro', weaponType: 'broadblade', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'camellya', name: 'Camellya', element: 'havoc', weaponType: 'sword', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'cantarella', name: 'Cantarella', element: 'havoc', weaponType: 'rectifier', rarity: 5, role: 'Sub-DPS', ready: false },
  { id: 'carlotta', name: 'Carlotta', element: 'glacio', weaponType: 'pistols', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'cartethyia', name: 'Cartethyia', element: 'aero', weaponType: 'sword', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'changli', name: 'Changli', element: 'fusion', weaponType: 'sword', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'chisa', name: 'Chisa', element: 'havoc', weaponType: 'broadblade', rarity: 5, ready: false },
  { id: 'chixia', name: 'Chixia', element: 'fusion', weaponType: 'pistols', rarity: 4, ready: false },
  { id: 'ciaccona', name: 'Ciaccona', element: 'aero', weaponType: 'pistols', rarity: 5, ready: false },
  { id: 'danjin', name: 'Danjin', element: 'havoc', weaponType: 'sword', rarity: 4, ready: false },
  { id: 'denia', name: 'Denia', element: 'fusion', weaponType: 'rectifier', rarity: 5, ready: false },
  { id: 'encore', name: 'Encore', element: 'fusion', weaponType: 'rectifier', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'galbrena', name: 'Galbrena', element: 'fusion', weaponType: 'pistols', rarity: 5, ready: false },
  { id: 'hiyuki', name: 'Hiyuki', element: 'glacio', weaponType: 'sword', rarity: 5, ready: false },
  { id: 'iuno', name: 'Iuno', element: 'aero', weaponType: 'gauntlets', rarity: 5, ready: false },
  { id: 'jianxin', name: 'Jianxin', element: 'aero', weaponType: 'gauntlets', rarity: 5, ready: false },
  { id: 'jinhsi', name: 'Jinhsi', element: 'spectro', weaponType: 'broadblade', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'jiyan', name: 'Jiyan', element: 'aero', weaponType: 'broadblade', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'lingyang', name: 'Lingyang', element: 'glacio', weaponType: 'gauntlets', rarity: 5, ready: false },
  { id: 'lucilla', name: 'Lucilla', element: 'glacio', weaponType: 'rectifier', rarity: 5, ready: false },
  { id: 'lucy', name: 'Lucy', element: 'spectro', weaponType: 'pistols', rarity: 5, ready: false },
  { id: 'lumi', name: 'Lumi', element: 'electro', weaponType: 'broadblade', rarity: 4, ready: false },
  { id: 'lupa', name: 'Lupa', element: 'fusion', weaponType: 'broadblade', rarity: 5, ready: false },
  { id: 'luuk-herssen', name: 'Luuk Herssen', element: 'spectro', weaponType: 'gauntlets', rarity: 5, ready: false },
  { id: 'lynae', name: 'Lynae', element: 'spectro', weaponType: 'pistols', rarity: 5, ready: false },
  { id: 'mornye', name: 'Mornye', element: 'fusion', weaponType: 'broadblade', rarity: 5, ready: false },
  { id: 'mortefi', name: 'Mortefi', element: 'fusion', weaponType: 'pistols', rarity: 4, ready: false },
  { id: 'phoebe', name: 'Phoebe', element: 'spectro', weaponType: 'rectifier', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'qiuyuan', name: 'Qiuyuan', element: 'aero', weaponType: 'sword', rarity: 5, ready: false },
  { id: 'rebecca', name: 'Rebecca', element: 'electro', weaponType: 'pistols', rarity: 5, ready: false },
  { id: 'roccia', name: 'Roccia', element: 'havoc', weaponType: 'gauntlets', rarity: 5, role: 'Sub-DPS', ready: false },
  { id: 'rover-aero', name: 'Rover (Aero)', element: 'aero', weaponType: 'sword', rarity: 5, ready: false },
  { id: 'rover-havoc', name: 'Rover (Havoc)', element: 'havoc', weaponType: 'sword', rarity: 5, ready: false },
  { id: 'rover-spectro', name: 'Rover (Spectro)', element: 'spectro', weaponType: 'sword', rarity: 5, ready: false },
  { id: 'sanhua', name: 'Sanhua', element: 'glacio', weaponType: 'sword', rarity: 4, ready: false },
  { id: 'sigrika', name: 'Sigrika', element: 'aero', weaponType: 'gauntlets', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'taoqi', name: 'Taoqi', element: 'havoc', weaponType: 'broadblade', rarity: 4, ready: false },
  { id: 'the-shorekeeper', name: 'The Shorekeeper', element: 'spectro', weaponType: 'rectifier', rarity: 5, role: 'Suporte', ready: false },
  { id: 'verina', name: 'Verina', element: 'spectro', weaponType: 'rectifier', rarity: 5, role: 'Suporte', ready: false },
  { id: 'xiangli-yao', name: 'Xiangli Yao', element: 'electro', weaponType: 'gauntlets', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'yangyang', name: 'Yangyang', element: 'aero', weaponType: 'sword', rarity: 4, ready: false },
  { id: 'yinlin', name: 'Yinlin', element: 'electro', weaponType: 'rectifier', rarity: 5, role: 'Sub-DPS', ready: false },
  { id: 'youhu', name: 'Youhu', element: 'glacio', weaponType: 'gauntlets', rarity: 4, ready: false },
  { id: 'yuanwu', name: 'Yuanwu', element: 'electro', weaponType: 'gauntlets', rarity: 4, ready: false },
  { id: 'zani', name: 'Zani', element: 'spectro', weaponType: 'gauntlets', rarity: 5, role: 'Dano Principal', ready: false },
  { id: 'zhezhi', name: 'Zhezhi', element: 'glacio', weaponType: 'rectifier', rarity: 5, role: 'Suporte', ready: false },
];
