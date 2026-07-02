interface Section {
  id: string;
  label: string;
}

export function MobileTocSheet({
  open,
  sections,
  accentColor,
  onJump,
  onToggle,
  onClose,
}: {
  open: boolean;
  sections: Section[];
  accentColor: string;
  onJump: (id: string) => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <>
      <button
        onClick={onToggle}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: accentColor,
          border: 'none',
          boxShadow: '0 4px 16px oklch(0 0 0 / 40%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          fontSize: 20,
          color: 'oklch(0.15 0 0)',
        }}
      >
        ☰
      </button>

      {open && (
        <>
          <div
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'oklch(0 0 0 / 50%)',
              zIndex: 25,
            }}
          />
          <div
            style={{
              position: 'fixed',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'oklch(0.22 0.006 260)',
              borderRadius: '20px 20px 0 0',
              padding: '16px 16px 24px',
              zIndex: 26,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <div
              style={{
                width: 36,
                height: 4,
                background: 'oklch(1 0 0 / 15%)',
                borderRadius: 2,
                margin: '0 auto 12px',
              }}
            />
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onJump(s.id)}
                style={{
                  textAlign: 'left',
                  padding: '12px 10px',
                  borderRadius: 8,
                  border: 'none',
                  background: 'none',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--text-primary-2)',
                  cursor: 'pointer',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
