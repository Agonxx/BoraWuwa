import { Link } from 'react-router-dom';
import type { Character } from '../data/types';
import { ELEMENTS, withAlpha } from '../data/elements';
import { WEAPON_TYPES } from '../data/weaponTypes';
import { characterImageSrc } from '../data/images';
import { ImageSlot } from './ImageSlot';

export function CharacterCard({ character }: { character: Character }) {
  const el = ELEMENTS[character.element];

  return (
    <Link
      to={`/${character.id}`}
      style={{
        cursor: 'pointer',
        background: 'var(--surface-1)',
        border: `1px solid ${withAlpha(el.color, character.ready ? 35 : 12)}`,
        borderRadius: 'var(--radius-card)',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        opacity: character.ready ? 1 : 0.55,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div style={{ position: 'relative' }}>
        <ImageSlot
          src={characterImageSrc(character.id)}
          alt={character.name}
          radius={12}
          style={{ width: '100%', aspectRatio: '3 / 4' }}
        />
        <span
          style={{
            position: 'absolute',
            top: 6,
            right: 6,
            background: 'oklch(0 0 0 / 55%)',
            backdropFilter: 'blur(4px)',
            borderRadius: 999,
            padding: '2px 6px',
            fontSize: 9,
            fontWeight: 700,
            color: character.rarity === 5 ? 'oklch(0.8 0.15 95)' : 'oklch(0.75 0.02 300)',
          }}
        >
          {'★'.repeat(character.rarity)}
        </span>
      </div>
      <div>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14 }}>
          {character.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: el.color,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 11, color: 'var(--text-dim-1)' }}>
            {el.label} · {WEAPON_TYPES[character.weaponType]}
          </span>
        </div>
      </div>
      {!character.ready && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '.05em',
            color: 'var(--text-dim-3)',
            textTransform: 'uppercase',
          }}
        >
          Em construção
        </div>
      )}
    </Link>
  );
}
