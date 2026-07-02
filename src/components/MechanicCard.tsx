import { Link } from 'react-router-dom';
import type { Mechanic } from '../data/types';
import { ImageSlot } from './ImageSlot';

export function MechanicCard({ mechanic }: { mechanic: Mechanic }) {
  return (
    <Link
      to={`/mecanicas/${mechanic.id}`}
      style={{
        cursor: 'pointer',
        background: 'var(--surface-1)',
        border: '1px solid var(--border-subtle-strong)',
        borderRadius: 'var(--radius-card)',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        opacity: 0.55,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <ImageSlot
        alt="Ícone / diagrama"
        radius={12}
        style={{ width: '100%', aspectRatio: '1 / 1' }}
      />
      <div>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14 }}>
          {mechanic.name}
        </div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '.05em',
            color: 'var(--text-dim-3)',
            textTransform: 'uppercase',
            marginTop: 4,
          }}
        >
          Em construção
        </div>
      </div>
    </Link>
  );
}
