import { useState } from 'react';
import { CHARACTERS } from '../../data/characters';
import { ELEMENTS } from '../../data/elements';
import { WEAPON_TYPES } from '../../data/weaponTypes';
import type { ElementKey, Rarity, WeaponTypeKey } from '../../data/types';
import { FilterChip } from '../FilterChip';
import { CharacterCard } from '../CharacterCard';
import { TabBar } from '../TabBar';

type ElementFilter = 'all' | ElementKey;
type WeaponFilter = 'all' | WeaponTypeKey;
type RarityFilter = 'all' | Rarity;

const NEUTRAL = 'oklch(0.85 0.006 260)';

export function CharacterGallery() {
  const [elementFilter, setElementFilter] = useState<ElementFilter>('all');
  const [weaponFilter, setWeaponFilter] = useState<WeaponFilter>('all');
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>('all');

  const filtered = CHARACTERS.filter(
    (c) =>
      (elementFilter === 'all' || c.element === elementFilter) &&
      (weaponFilter === 'all' || c.weaponType === weaponFilter) &&
      (rarityFilter === 'all' || c.rarity === rarityFilter),
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={filterLabelStyle}>Elemento</span>
              <FilterChip
                label="Todos"
                color={NEUTRAL}
                active={elementFilter === 'all'}
                onClick={() => setElementFilter('all')}
              />
              {(Object.keys(ELEMENTS) as ElementKey[]).map((key) => (
                <FilterChip
                  key={key}
                  label={ELEMENTS[key].label}
                  color={ELEMENTS[key].color}
                  active={elementFilter === key}
                  onClick={() => setElementFilter(key)}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={filterLabelStyle}>Arma</span>
              <FilterChip
                label="Todas"
                color={NEUTRAL}
                active={weaponFilter === 'all'}
                onClick={() => setWeaponFilter('all')}
              />
              {(Object.keys(WEAPON_TYPES) as WeaponTypeKey[]).map((key) => (
                <FilterChip
                  key={key}
                  label={WEAPON_TYPES[key]}
                  color={NEUTRAL}
                  active={weaponFilter === key}
                  onClick={() => setWeaponFilter(key)}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={filterLabelStyle}>Raridade</span>
              <FilterChip
                label="Todas"
                color={NEUTRAL}
                active={rarityFilter === 'all'}
                onClick={() => setRarityFilter('all')}
              />
              <FilterChip
                label="★★★★★"
                color="oklch(0.8 0.15 95)"
                active={rarityFilter === 5}
                onClick={() => setRarityFilter(5)}
              />
              <FilterChip
                label="★★★★"
                color={NEUTRAL}
                active={rarityFilter === 4}
                onClick={() => setRarityFilter(4)}
              />
            </div>
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

const filterLabelStyle = {
  fontSize: 11,
  fontWeight: 700,
  color: 'var(--text-dim-3)',
  textTransform: 'uppercase' as const,
  letterSpacing: '.04em',
  width: 62,
  flexShrink: 0,
};
