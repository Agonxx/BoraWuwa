import type { Character } from '../../data/types';
import { weaponImageSrc } from '../../data/images';
import { ImageSlot } from '../ImageSlot';

export function WeaponsSection({ character }: { character: Character }) {
  if (!character.detail) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {character.detail.weapons.map((w) => (
        <div
          key={w.slug}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            background: 'var(--surface-3)',
            borderRadius: 10,
            padding: '8px 14px 8px 8px',
            fontSize: 13,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <ImageSlot
              src={weaponImageSrc(w.slug)}
              alt={w.name}
              radius={8}
              style={{ width: 36, height: 36, flexShrink: 0 }}
            />
            <span style={{ fontWeight: 600 }}>{w.name}</span>
          </div>
          <span style={{ color: 'var(--text-dim-1)', fontSize: 12, flexShrink: 0 }}>
            {w.stat}
          </span>
        </div>
      ))}
    </div>
  );
}
