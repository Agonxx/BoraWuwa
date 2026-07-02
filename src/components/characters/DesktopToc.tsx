interface Section {
  id: string;
  label: string;
}

export function DesktopToc({
  sections,
  onJump,
}: {
  sections: Section[];
  onJump: (id: string) => void;
}) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 20,
        alignSelf: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        paddingTop: 4,
      }}
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onJump(s.id)}
          style={{
            textAlign: 'left',
            padding: '8px 12px',
            borderRadius: 8,
            border: 'none',
            background: 'none',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-dim-1)',
            cursor: 'pointer',
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
