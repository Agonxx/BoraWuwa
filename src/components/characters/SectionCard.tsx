import type { ReactNode } from 'react';

interface SectionCardProps {
  id: string;
  label: string;
  accentColor: string;
  isMobile: boolean;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function SectionCard({
  id,
  label,
  accentColor,
  isMobile,
  open,
  onToggle,
  children,
}: SectionCardProps) {
  return (
    <div
      id={`sec-${id}`}
      style={{
        background: 'var(--surface-2)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding: '16px 18px',
        scrollMarginTop: 80,
      }}
    >
      <div
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: isMobile ? 'pointer' : 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{ width: 8, height: 8, borderRadius: '50%', background: accentColor }}
          />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14 }}>
            {label}
          </span>
        </div>
        {isMobile && (
          <span style={{ fontSize: 12, color: 'var(--text-dim-2)' }}>{open ? '▾' : '▸'}</span>
        )}
      </div>

      {(!isMobile || open) && <div style={{ marginTop: 14 }}>{children}</div>}
    </div>
  );
}
