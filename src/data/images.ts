// Ids with a real thumbnail dropped into public/img/characters/ (sourced from wuthering.gg).
// Everything else falls back to the dashed ImageSlot placeholder until real art is supplied.
const HAS_IMAGE = new Set([
  'cartethyia',
  'jinhsi',
  'changli',
  'camellya',
  'carlotta',
  'zhezhi',
  'shorekeeper',
  'verina',
  'yinlin',
  'calcharo',
  'jiyan',
  'encore',
  'xiangliyao',
  'zani',
  'roccia',
  'brant',
  'cantarella',
  'augusta',
  'phoebe',
  'sigrika',
  'ciaconna',
  'sanhua',
  'aero-rover',
]);

export function characterImageSrc(id: string): string | undefined {
  return HAS_IMAGE.has(id) ? `/img/characters/${id}.png` : undefined;
}
