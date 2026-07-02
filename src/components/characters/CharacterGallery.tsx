import { useState } from 'react';
import { CHARACTERS } from '../../data/characters';
import { ELEMENTS } from '../../data/elements';
import type { ElementKey } from '../../data/types';
import { FilterChip } from '../FilterChip';
import { CharacterCard } from '../CharacterCard';
import { TabBar } from '../TabBar';

type FilterKey = 'all' | ElementKey;

export function CharacterGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = CHARACTERS.filter(
    (c) => activeFilter === 'all' || c.element === activeFilter,
  );

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

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
            <FilterChip
              label="Todos"
              color="oklch(0.85 0.006 260)"
              active={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            />
            {(Object.keys(ELEMENTS) as ElementKey[]).map((key) => (
              <FilterChip
                key={key}
                label={ELEMENTS[key].label}
                color={ELEMENTS[key].color}
                active={activeFilter === key}
                onClick={() => setActiveFilter(key)}
              />
            ))}
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
        {filtered.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
}
