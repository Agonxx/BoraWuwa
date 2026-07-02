import { withAlpha } from '../data/elements';

interface FilterChipProps {
  label: string;
  color: string;
  active: boolean;
  onClick: () => void;
}

export function FilterChip({ label, color, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '7px 14px',
        borderRadius: 999,
        fontSize: 13,
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        cursor: 'pointer',
        border: `1px solid ${active ? color : 'oklch(1 0 0 / 12%)'}`,
        background: active ? withAlpha(color, 16) : 'transparent',
        color: active ? color : 'oklch(0.75 0.01 260)',
      }}
    >
      {label}
    </button>
  );
}
