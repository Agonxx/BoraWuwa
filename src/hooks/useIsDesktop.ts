import { useEffect, useState } from 'react';

const BREAKPOINT = 900;

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= BREAKPOINT);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isDesktop;
}
