import { Link } from 'react-router-dom';
import type { Character } from '../data/types';
import { ELEMENTS, withAlpha } from '../data/elements';
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
      <ImageSlot
        src={characterImageSrc(character.id)}
        alt={character.name}
        radius={12}
        style={{ width: '100%', aspectRatio: '3 / 4' }}
      />
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
            {el.label} · {character.role}
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
