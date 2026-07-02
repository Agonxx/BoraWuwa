import type { Character } from '../../data/types';
import { weaponImageSrc } from '../../data/images';
import { ImageSlot } from '../ImageSlot';
import { withAlpha } from '../../data/elements';

function formatPct(pct: number): string {
  return Number.isInteger(pct) ? String(pct) : pct.toFixed(1).replace('.', ',');
}

function pctColor(pct: number, accentColor: string): string {
  if (pct >= 95) return accentColor;
  if (pct >= 80) return 'oklch(0.85 0.006 260)';
  return 'oklch(0.7 0.01 260)';
}

export function WeaponsSection({ character, accentColor }: { character: Character; accentColor: string }) {
  if (!character.detail) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 10,
      }}
    >
      {character.detail.weapons.map((w) => (
        <div
          key={w.slug}
          style={{
            position: 'relative',
            background: 'var(--surface-3)',
            border: `1px solid ${w.isSignature ? withAlpha(accentColor, 45) : 'oklch(1 0 0 / 6%)'}`,
            borderRadius: 14,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {w.isSignature && (
            <div
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: accentColor,
                color: 'oklch(0.15 0 0)',
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: '.04em',
                textTransform: 'uppercase',
                borderRadius: 999,
                padding: '2px 7px',
                zIndex: 1,
              }}
            >
              Assinatura
            </div>
          )}
          <ImageSlot
            src={weaponImageSrc(w.slug)}
            alt={w.name}
            radius={10}
            fit="contain"
            style={{
              width: '100%',
              aspectRatio: '1',
              background: 'var(--surface-4)',
              padding: 10,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 20,
                lineHeight: 1,
                color: pctColor(w.pct, accentColor),
              }}
            >
              {formatPct(w.pct)}
              <span style={{ fontSize: 12, fontWeight: 700 }}>%</span>
            </div>
            <div
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                color: 'var(--text-dim-3)',
                textTransform: 'uppercase',
                letterSpacing: '.03em',
                marginTop: 2,
              }}
            >
              desempenho
            </div>
          </div>
          <div style={{ height: 1, background: 'oklch(1 0 0 / 8%)' }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.25 }}>{w.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text-dim-1)', marginTop: 3, lineHeight: 1.3 }}>
              {w.stat}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
