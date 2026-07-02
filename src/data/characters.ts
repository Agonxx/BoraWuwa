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

  // Resto do roster (registro básico via prydwen.gg — sem guia de build ainda).
  { id: 'aalto', name: 'Aalto', element: 'aero', weaponType: 'pistols', rarity: 4, ready: false },
  { id: 'aemeath', name: 'Aemeath', element: 'fusion', weaponType: 'sword', rarity: 5, ready: false },
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
