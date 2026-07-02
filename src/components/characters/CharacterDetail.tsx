import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CHARACTERS } from '../../data/characters';
import { ELEMENTS, withAlpha } from '../../data/elements';
import { characterImageSrc } from '../../data/images';
import { useIsDesktop } from '../../hooks/useIsDesktop';
import { ImageSlot } from '../ImageSlot';
import { UnfinishedNotice } from '../UnfinishedNotice';
import { SectionCard } from './SectionCard';
import { DesktopToc } from './DesktopToc';
import { MobileTocSheet } from './MobileTocSheet';
import { OverviewSection } from './OverviewSection';
import { EchoesSection } from './EchoesSection';
import { SynergySection } from './SynergySection';
import { WeaponsSection } from './WeaponsSection';
import { PrioritySection } from './PrioritySection';

const SECTIONS = [
  { id: 'overview', label: 'Visão Geral' },
  { id: 'echoes', label: 'Echoes' },
  { id: 'synergy', label: 'Sinergia de Time' },
  { id: 'weapons', label: 'Opções de Arma' },
  { id: 'priority', label: 'Prioridade de Habilidades' },
];

const DEFAULT_OPEN = { overview: true, echoes: false, synergy: false, weapons: false, priority: false };

export function CharacterDetail() {
  const { characterId } = useParams<{ characterId: string }>();
  const character = CHARACTERS.find((c) => c.id === characterId) ?? CHARACTERS[0];
  const isDesktop = useIsDesktop();
  const [sectionsOpen, setSectionsOpen] = useState<Record<string, boolean>>(DEFAULT_OPEN);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    setSectionsOpen(DEFAULT_OPEN);
    setTocOpen(false);
    window.scrollTo({ top: 0 });
  }, [characterId]);

  const el = ELEMENTS[character.element];
  const accentColor = el.color;

  function jumpToSection(id: string) {
    setSectionsOpen((s) => ({ ...s, [id]: true }));
    setTocOpen(false);
    requestAnimationFrame(() => {
      const target = document.getElementById(`sec-${id}`);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffset - (isDesktop ? 90 : 80);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 20px 80px' }}>
      <Link
        to="/"
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

      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <ImageSlot
          src={characterImageSrc(character.id)}
          alt={character.name}
          radius={14}
          style={{
            width: 120,
            aspectRatio: '3 / 4',
            border: `2px solid ${accentColor}`,
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 26, fontWeight: 700 }}>
            {character.name}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
            <span
              style={{
                background: withAlpha(accentColor, 14),
                color: accentColor,
                border: `1px solid ${accentColor}`,
                borderRadius: 999,
                padding: '4px 12px',
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {el.label}
            </span>
            <span
              style={{
                background: 'var(--surface-3)',
                borderRadius: 999,
                padding: '4px 12px',
                fontSize: 12,
                fontWeight: 600,
                color: 'oklch(0.8 0.008 260)',
              }}
            >
              {character.role}
            </span>
          </div>
        </div>
      </div>

      {character.ready && character.detail ? (
        <div
          style={
            isDesktop
              ? { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, marginTop: 24 }
              : { display: 'block', marginTop: 20 }
          }
        >
          {isDesktop && <DesktopToc sections={SECTIONS} onJump={jumpToSection} />}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
            <SectionCard
              id="overview"
              label="Visão Geral"
              accentColor={accentColor}
              isMobile={!isDesktop}
              open={sectionsOpen.overview}
              onToggle={() => setSectionsOpen((s) => ({ ...s, overview: !s.overview }))}
            >
              <OverviewSection character={character} />
            </SectionCard>

            <SectionCard
              id="echoes"
              label="Echoes"
              accentColor={accentColor}
              isMobile={!isDesktop}
              open={sectionsOpen.echoes}
              onToggle={() => setSectionsOpen((s) => ({ ...s, echoes: !s.echoes }))}
            >
              <EchoesSection character={character} accentColor={accentColor} />
            </SectionCard>

            <SectionCard
              id="synergy"
              label="Sinergia de Time"
              accentColor={accentColor}
              isMobile={!isDesktop}
              open={sectionsOpen.synergy}
              onToggle={() => setSectionsOpen((s) => ({ ...s, synergy: !s.synergy }))}
            >
              <SynergySection character={character} accentColor={accentColor} />
            </SectionCard>

            <SectionCard
              id="weapons"
              label="Opções de Arma"
              accentColor={accentColor}
              isMobile={!isDesktop}
              open={sectionsOpen.weapons}
              onToggle={() => setSectionsOpen((s) => ({ ...s, weapons: !s.weapons }))}
            >
              <WeaponsSection character={character} accentColor={accentColor} />
            </SectionCard>

            <SectionCard
              id="priority"
              label="Prioridade de Habilidades"
              accentColor={accentColor}
              isMobile={!isDesktop}
              open={sectionsOpen.priority}
              onToggle={() => setSectionsOpen((s) => ({ ...s, priority: !s.priority }))}
            >
              <PrioritySection character={character} accentColor={accentColor} />
            </SectionCard>
          </div>
        </div>
      ) : (
        <UnfinishedNotice />
      )}

      {!isDesktop && character.ready && (
        <MobileTocSheet
          open={tocOpen}
          sections={SECTIONS}
          accentColor={accentColor}
          onJump={jumpToSection}
          onToggle={() => setTocOpen((v) => !v)}
          onClose={() => setTocOpen(false)}
        />
      )}
    </div>
  );
}
