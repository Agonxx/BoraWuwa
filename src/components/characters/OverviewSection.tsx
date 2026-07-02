import type { Character } from '../../data/types';
import { ELEMENTS } from '../../data/elements';

export function OverviewSection({ character }: { character: Character }) {
  if (!character.detail) return null;
  const el = ELEMENTS[character.element];

  const stats: [string, string, string?][] = [
    ['Elemento', el.label],
    ['Papel', character.role],
    ['Arma', character.detail.weapon],
    ['Raridade', character.detail.rarityStars, el.color],
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {stats.map(([label, value, color]) => (
          <div
            key={label}
            style={{
              background: 'var(--surface-3)',
              borderRadius: 8,
              padding: '6px 10px',
              fontSize: 12,
            }}
          >
            <span style={{ color: 'var(--text-dim-2)' }}>{label} </span>
            <span style={{ fontWeight: 700, color: color ?? 'inherit' }}>{value}</span>
          </div>
        ))}
      </div>
      <ul
        style={{
          margin: 0,
          paddingLeft: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          fontSize: 14,
          color: 'oklch(0.85 0.008 260)',
        }}
      >
        {character.detail.overviewBullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
