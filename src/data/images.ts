// Card art for the full roster, sourced from prydwen.gg's character gallery (`{shortcode}_card.webp`,
// saved locally keyed by our own id instead). Every character in CHARACTERS has a matching file.
export function characterImageSrc(id: string): string {
  return `/img/characters/${id}.webp`;
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
