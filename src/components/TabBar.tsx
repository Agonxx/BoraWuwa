import type { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function TabBar() {
  const location = useLocation();
  const isMechanics = location.pathname.startsWith('/mecanicas');

  return (
    <div
      style={{
        display: 'inline-flex',
        gap: 4,
        background: 'oklch(0.24 0.006 260)',
        borderRadius: 999,
        padding: 4,
        marginTop: 14,
      }}
    >
      <Link to="/" style={tabStyle(!isMechanics)}>
        Ressonadores
      </Link>
      <Link to="/mecanicas" style={tabStyle(isMechanics)}>
        Mecânicas
      </Link>
    </div>
  );
}

function tabStyle(active: boolean): CSSProperties {
  return {
    padding: '7px 16px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Manrope, sans-serif',
    textDecoration: 'none',
    cursor: 'pointer',
    background: active ? 'oklch(0.95 0.006 260)' : 'transparent',
    color: active ? 'oklch(0.16 0.004 260)' : 'oklch(0.68 0.01 260)',
  };
}
