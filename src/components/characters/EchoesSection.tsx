import type { Character } from '../../data/types';
import { echoImageSrc } from '../../data/images';
import { ImageSlot } from '../ImageSlot';

export function EchoesSection({ character, accentColor }: { character: Character; accentColor: string }) {
  if (!character.detail) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 10,
      }}
    >
      {character.detail.echoSets.map((set) => (
        <div
          key={set.slug}
          style={{
            background: 'var(--surface-3)',
            borderRadius: 12,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ImageSlot
              src={echoImageSrc(set.slug)}
              alt={set.label}
              radius={8}
              style={{ width: 32, height: 32, flexShrink: 0 }}
            />
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: 13,
                color: accentColor,
              }}
            >
              {set.label}
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '4px 10px',
              fontSize: 12.5,
            }}
          >
            <span style={{ color: 'var(--text-dim-2)' }}>Custo</span>
            <span>{set.cost}</span>
            <span style={{ color: 'var(--text-dim-2)' }}>Stat principal</span>
            <span>{set.mainStat}</span>
            <span style={{ color: 'var(--text-dim-2)' }}>Sub-stat</span>
            <span>{set.subStat}</span>
          </div>
          {set.effect && (
            <div
              style={{
                fontSize: 12,
                color: 'var(--text-dim-1)',
                lineHeight: 1.4,
                paddingTop: 6,
                borderTop: '1px solid oklch(1 0 0 / 8%)',
              }}
            >
              {set.effect}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
