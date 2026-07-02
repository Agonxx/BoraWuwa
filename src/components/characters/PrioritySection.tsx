import { Fragment } from 'react';
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
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 14, fontSize: 12.5 }}>
      {view.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <span style={{ color: accentColor, fontWeight: 800, fontSize: 15, lineHeight: 1 }}>»</span>
          )}
          <span
            style={{
              background: 'var(--surface-3)',
              border: `1px solid ${accentColor}`,
              borderRadius: 8,
              padding: '10px 16px',
              fontWeight: 700,
            }}
          >
            {DESKTOP_SHORT_LABELS[p.label] ?? p.label}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
