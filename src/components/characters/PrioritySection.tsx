import type { Character, PriorityChip } from '../../data/types';
import { withAlpha } from '../../data/elements';
import { useIsDesktop } from '../../hooks/useIsDesktop';

const DESKTOP_SHORT_LABELS: Record<string, string> = {
  'Ataque Normal': 'Básico',
  'Habilidade de Ressonância': 'Habilidade',
  'Liberação de Ressonância': 'Ultimate',
  'Habilidade de Introdução': 'Intro',
};

interface PriorityView {
  label: string;
  sep: string | null;
  weight: number;
  tierLabel: string;
  tierColor: string;
  barColor: string;
}

function buildPriorityView(chips: PriorityChip[], accentColor: string): PriorityView[] {
  let weight = 100;

  return chips.map((c, i) => {
    if (i === 0) {
      weight = 100;
    } else if (c.sep === '=') {
      // empata com o anterior, peso inalterado
    } else if (c.sep === '>>') {
      weight = Math.max(20, weight - 40);
    } else {
      weight = Math.max(20, weight - 20);
    }

    let tierLabel: string;
    let opacityPct: number;
    if (weight >= 90) {
      tierLabel = 'Essencial';
      opacityPct = 100;
    } else if (weight >= 70) {
      tierLabel = 'Alta';
      opacityPct = 75;
    } else if (weight >= 50) {
      tierLabel = 'Média';
      opacityPct = 50;
    } else {
      tierLabel = 'Baixa';
      opacityPct = 32;
    }

    return {
      label: c.label,
      sep: c.sep,
      weight,
      tierLabel,
      tierColor: withAlpha(accentColor, Math.max(opacityPct, 45)),
      barColor: withAlpha(accentColor, opacityPct),
    };
  });
}

export function PrioritySection({ character, accentColor }: { character: Character; accentColor: string }) {
  const isDesktop = useIsDesktop();

  if (!character.detail) return null;

  const view = buildPriorityView(character.detail.priorityChips, accentColor);

  if (!isDesktop) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {view.map((pb, i) => (
          <div key={i}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 5,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700 }}>{pb.label}</span>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '.03em',
                  textTransform: 'uppercase',
                  color: pb.tierColor,
                }}
              >
                {pb.tierLabel}
              </span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-3)', overflow: 'hidden' }}>
              <div style={{ width: `${pb.weight}%`, height: '100%', background: pb.barColor }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          fontSize: 12.5,
        }}
      >
        {view.map((p, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {p.sep === '=' && (
              <span
                style={{
                  color: 'var(--text-dim-2)',
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: 1,
                  padding: '0 3px',
                }}
              >
                {p.sep}
              </span>
            )}
            {p.sep && p.sep !== '=' && (
              <span
                style={{
                  color: accentColor,
                  fontWeight: 800,
                  fontSize: 17,
                  lineHeight: 1,
                  padding: '0 2px',
                }}
              >
                {p.sep}
              </span>
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
              {DESKTOP_SHORT_LABELS[p.label] ?? p.label}
            </span>
          </span>
        ))}
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--text-dim-3)', display: 'flex', gap: 16 }}>
        <span>
          <span style={{ color: accentColor, fontWeight: 800 }}>&gt;</span> = prioridade estrita
        </span>
        <span>
          <span style={{ color: 'var(--text-dim-2)', fontWeight: 700 }}>=</span> = empate
        </span>
      </div>
    </div>
  );
}
