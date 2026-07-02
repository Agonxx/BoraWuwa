// Generates -hq/-md/-lq variants of every character portrait in public/img/characters/.
// Run again whenever a new character's card art is dropped in as `{id}.webp` — it renames
// that file to `{id}-hq.webp` (the source of truth) and derives -md/-lq from it. Already
// suffixed files are left untouched, so re-running is safe.
import { readdirSync, renameSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = join(import.meta.dirname, '..', 'public', 'img', 'characters');

const VARIANTS = [
  { suffix: 'md', height: 360 },
  { suffix: 'lq', height: 150 },
];

const files = readdirSync(DIR).filter(
  (f) => f.endsWith('.webp') && !f.endsWith('-hq.webp') && !f.endsWith('-md.webp') && !f.endsWith('-lq.webp'),
);

for (const file of files) {
  const id = file.slice(0, -'.webp'.length);
  const original = join(DIR, file);
  const hq = join(DIR, `${id}-hq.webp`);

  renameSync(original, hq);

  for (const { suffix, height } of VARIANTS) {
    const target = join(DIR, `${id}-${suffix}.webp`);
    await sharp(hq).resize({ height }).toFile(target);
  }

  console.log(`${id}: hq + md(${VARIANTS[0].height}px) + lq(${VARIANTS[1].height}px)`);
}

console.log(`Done. ${files.length} character(s) processed.`);
