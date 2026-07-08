import { useState } from 'react';
import type { Character, SynergyPair } from '../../data/types';
import { characterImageSrc } from '../../data/images';
import { ImageSlot } from '../ImageSlot';
import { useIsDesktop } from '../../hooks/useIsDesktop';

const GAP = 10;
const MOBILE_MAX_CARD_WIDTH = 100;

function SynergyNotes({ pair, accentColor }: { pair: SynergyPair; accentColor: string }) {
  return (
    <div
      style={{
        background: 'var(--surface-3)',
        borderRadius: 14,
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '.04em',
            color: accentColor,
          }}
        >
          Rotação
        </div>
        <div style={{ fontSize: 12.5, marginTop: 3, lineHeight: 1.4, color: 'oklch(0.85 0.008 260)' }}>
          {pair.rotation}
        </div>
      </div>
      <ul
        style={{
          margin: 0,
          paddingLeft: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          fontSize: 12.5,
          color: 'var(--text-dim-1)',
        }}
      >
        {pair.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export function SynergySection({ character, accentColor }: { character: Character; accentColor: string }) {
  const isDesktop = useIsDesktop();
  const [expanded, setExpanded] = useState<number | null>(null);

  if (!character.detail) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {character.detail.synergyPairs.map((pair, i) => {
        const isOpen = expanded === i;

        return (
          <div
            key={i}
            onClick={isDesktop ? undefined : () => setExpanded((cur) => (cur === i ? null : i))}
            style={{ cursor: isDesktop ? 'default' : 'pointer' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                gap: 14,
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${pair.members.length}, 1fr)`,
                  gap: GAP,
                  maxWidth: isDesktop
                    ? undefined
                    : pair.members.length * MOBILE_MAX_CARD_WIDTH + (pair.members.length - 1) * GAP,
                }}
              >
                {pair.members.map((m) => (
                  <div
                    key={m.id}
                    style={{
                      minWidth: 0,
                      background: 'var(--surface-3)',
                      borderRadius: 14,
                      padding: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                      textAlign: 'center',
                    }}
                  >
                    <ImageSlot
                      src={characterImageSrc(m.id, 'md')}
                      alt={m.name}
                      radius={10}
                      style={{ width: '100%', aspectRatio: '3 / 4' }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: 1.25,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {m.name}
                    </span>
                  </div>
                ))}
              </div>

              {isDesktop && <SynergyNotes pair={pair} accentColor={accentColor} />}
            </div>

            {!isDesktop && (
              <div style={{ marginTop: 6, fontSize: 11, fontWeight: 600, color: 'var(--text-dim-2)' }}>
                {isOpen ? 'Ocultar rotação ▴' : 'Ver rotação e notas ▾'}
              </div>
            )}

            {!isDesktop && isOpen && (
              <div style={{ marginTop: 10 }}>
                <SynergyNotes pair={pair} accentColor={accentColor} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
