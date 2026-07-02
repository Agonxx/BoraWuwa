import type { Character } from '../../data/types';

export function PrioritySection({ character, accentColor }: { character: Character; accentColor: string }) {
  if (!character.detail) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap',
        fontSize: 12.5,
      }}
    >
      {character.detail.priorityChips.map((chip, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {chip.sep && (
            <span style={{ color: 'var(--text-dim-3)', fontWeight: 700 }}>{chip.sep}</span>
          )}
          <span
            style={{
              background: 'var(--surface-3)',
              border: `1px solid ${accentColor}`,
              borderRadius: 8,
              padding: '6px 10px',
              fontWeight: 600,
            }}
          >
            {chip.label}
          </span>
        </span>
      ))}
    </div>
  );
}
