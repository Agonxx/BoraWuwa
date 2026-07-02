import type { CSSProperties } from 'react';

interface ImageSlotProps {
  src?: string;
  alt: string;
  radius?: number;
  fit?: CSSProperties['objectFit'];
  style?: CSSProperties;
}

export function ImageSlot({ src, alt, radius = 8, fit = 'cover', style }: ImageSlotProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius: radius,
          objectFit: fit,
          ...style,
        }}
      />
    );
  }

  return (
    <div
      title={alt}
      style={{
        borderRadius: radius,
        border: '1px dashed oklch(1 0 0 / 15%)',
        background: 'oklch(1 0 0 / 3%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        ...style,
      }}
    >
      <span
        style={{
          fontSize: 10,
          color: 'oklch(0.5 0.01 260)',
          textAlign: 'center',
          padding: 4,
        }}
      >
        {alt}
      </span>
    </div>
  );
}
