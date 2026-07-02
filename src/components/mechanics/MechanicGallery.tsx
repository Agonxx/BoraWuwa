import { MECHANICS } from '../../data/mechanics';
import { MechanicCard } from '../MechanicCard';
import { TabBar } from '../TabBar';

export function MechanicGallery() {
  return (
    <div>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'oklch(0.17 0.004 260 / 92%)',
          backdropFilter: 'blur(10px)',
          padding: '20px 20px 16px',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            Central de Ressonadores
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-dim-1)', marginTop: 2 }}>
            Guias rápidos de build — sem enrolação
          </div>

          <TabBar />

          <div style={{ fontSize: 13, color: 'var(--text-dim-1)', marginTop: 14 }}>
            Sistemas e mecânicas do jogo, sem depender de personagem.
          </div>
        </div>
      </div>

      <div
        style={{
          padding: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 14,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {MECHANICS.map((m) => (
          <MechanicCard key={m.id} mechanic={m} />
        ))}
      </div>
    </div>
  );
}
