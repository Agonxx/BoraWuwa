import { Link, useParams } from 'react-router-dom';
import { MECHANICS } from '../../data/mechanics';
import { ImageSlot } from '../ImageSlot';
import { UnfinishedNotice } from '../UnfinishedNotice';

export function MechanicDetail() {
  const { mechanicId } = useParams<{ mechanicId: string }>();
  const mechanic = MECHANICS.find((m) => m.id === mechanicId) ?? MECHANICS[0];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 20px 80px' }}>
      <Link
        to="/mecanicas"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: 'none',
          color: 'var(--text-dim-1)',
          fontFamily: 'Manrope, sans-serif',
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
          marginBottom: 18,
          width: 'fit-content',
        }}
      >
        ← Voltar
      </Link>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <ImageSlot alt="Ícone" radius={14} style={{ width: 96, height: 96, flexShrink: 0 }} />
        <div
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 26, fontWeight: 700 }}
        >
          {mechanic.name}
        </div>
      </div>

      <UnfinishedNotice />
    </div>
  );
}
