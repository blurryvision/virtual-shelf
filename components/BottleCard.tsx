'use client';

import Image from 'next/image';
import { Bottle, SPIRIT_COLORS, SPIRIT_GLOWS, SPIRIT_SHADOWS } from '@/lib/bottles';

interface BottleCardProps {
  bottle: Bottle;
  onClick: (bottle: Bottle) => void;
  style?: React.CSSProperties;
}

export default function BottleCard({ bottle, onClick, style }: BottleCardProps) {
  const badgeColor  = SPIRIT_COLORS[bottle.type]   ?? SPIRIT_COLORS['Other'];
  const glowColor   = SPIRIT_GLOWS[bottle.type]    ?? SPIRIT_GLOWS['Other'];
  const shadowColor = SPIRIT_SHADOWS[bottle.type]  ?? SPIRIT_SHADOWS['Other'];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(bottle);
    }
  };

  return (
    <div
      className="bottle-card"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${bottle.name} by ${bottle.brand}`}
      id={`bottle-${bottle.id}`}
      onClick={() => onClick(bottle)}
      onKeyDown={handleKeyDown}
      style={{
        ...style,
        // Inject per-type glow colour as a CSS custom property;
        // the ::after pseudo-element and hover background read from it.
        '--glow-color':   glowColor,
        '--shadow-color': shadowColor,
      } as React.CSSProperties}
    >
      {/* Big centred image */}
      <div className="bottle-card-image-wrap">
        <Image
          src={bottle.imagePath}
          alt={`${bottle.name} miniature bottle`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="bottle-card-img"
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
            padding: '14px 18px 8px',
          }}
          priority={false}
        />
      </div>

      {/* Subtle info strip at bottom */}
      <div className="bottle-card-info">
        <span className="bottle-card-type-badge" style={{ backgroundColor: badgeColor }}>
          {bottle.type}
        </span>
        <p className="bottle-card-name">{bottle.name}</p>
        <p className="bottle-card-abv">{bottle.abv}% ABV</p>
      </div>
    </div>
  );
}
