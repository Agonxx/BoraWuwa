// Ids with a real thumbnail dropped into public/img/characters/ (sourced from wuthering.gg
// and, for Phrolova, prydwen.gg). Everything else falls back to the dashed ImageSlot
// placeholder until real art is supplied.
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
  'phrolova',
  'lucilla',
  'qiuyuan',
  'danjin',
  'galbrena',
  'buling',
  'rover-havoc',
]);

// A few characters have a nicer vertical "card" art (~3:4, matches our portrait slot
// almost exactly) instead of the plain square icon crop everyone else uses — used for
// the card/hero image slots. Naming convention on prydwen.gg: `{shortcode}_card.webp`.
const IMAGE_OVERRIDES: Record<string, string> = {
  phrolova: '/img/characters/phrolova-card.webp',
};

export function characterImageSrc(id: string): string | undefined {
  if (IMAGE_OVERRIDES[id]) return IMAGE_OVERRIDES[id];
  return HAS_IMAGE.has(id) ? `/img/characters/${id}.png` : undefined;
}

// Weapon and echo set icons, sourced from prydwen.gg, stored once and reused across any
// character whose build references the same weapon/echo set.
const HAS_WEAPON_IMAGE = new Set([
  'lethean-elegy',
  'stringmaster',
  'whispers-of-sirens',
  'rime-draped-sprouts',
  'luminous-hymn',
  'cosmic-ripples',
  'radiant-dawn',
  'augment',
  'fusion-accretion',
  'jinzhou-keeper',
]);

const HAS_ECHO_IMAGE = new Set([
  'dream-of-the-lost',
  'havoc-eclipse',
  'midnight-veil',
  'endless-resonance',
  'reel-of-spliced-memories',
  'frosty-resolve',
]);

export function weaponImageSrc(slug: string): string | undefined {
  return HAS_WEAPON_IMAGE.has(slug) ? `/img/weapons/${slug}.webp` : undefined;
}

export function echoImageSrc(slug: string): string | undefined {
  return HAS_ECHO_IMAGE.has(slug) ? `/img/echoes/${slug}.webp` : undefined;
}
