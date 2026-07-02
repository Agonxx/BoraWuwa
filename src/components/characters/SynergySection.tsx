import type { Character } from '../../data/types';
import { characterImageSrc } from '../../data/images';
import { ImageSlot } from '../ImageSlot';

export function SynergySection({ character }: { character: Character }) {
  if (!character.detail) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {character.detail.synergyPairs.map((pair, i) => (
        <div
          key={i}
          style={{
            background: 'var(--surface-3)',
            borderRadius: 999,
            padding: '8px 16px 8px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: 'fit-content',
          }}
        >
          {pair.members.map((m, mi) => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {mi > 0 && (
                <span style={{ color: 'var(--text-dim-3)', fontWeight: 700, fontSize: 13 }}>
                  +
                </span>
              )}
              <ImageSlot
                src={characterImageSrc(m.id)}
                alt={m.name}
                radius={8}
                style={{ width: 28, height: 28, flexShrink: 0 }}
              />
              <span style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
