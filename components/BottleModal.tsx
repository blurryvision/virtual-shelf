'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Bottle, SPIRIT_COLORS, getFlag } from '@/lib/bottles';

interface BottleModalProps {
  bottle: Bottle | null;
  onClose: () => void;
}

export default function BottleModal({ bottle, onClose }: BottleModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!bottle) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [bottle, handleKeyDown]);

  if (!bottle) return null;

  const badgeColor = SPIRIT_COLORS[bottle.type] ?? SPIRIT_COLORS['Other'];
  const flag = getFlag(bottle.origin);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${bottle.name} details`}
      id="bottle-modal"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-panel">
        {/* Close button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close bottle details"
          id="modal-close-btn"
        >
          ✕
        </button>

        {/* Bottle image */}
        <div className="modal-image-section">
          <Image
            src={bottle.imagePath}
            alt={`${bottle.name} miniature bottle`}
            width={220}
            height={260}
            className="modal-bottle-img"
            style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            priority
          />
        </div>

        {/* Content */}
        <div className="modal-content">
          <span
            className="modal-type-badge"
            style={{ backgroundColor: badgeColor }}
          >
            {bottle.type}
          </span>

          <h2 className="modal-title">{bottle.name}</h2>
          <p className="modal-brand">{bottle.brand}</p>

          <div className="modal-divider" />

          <div className="modal-stats">
            <div className="modal-stat">
              <p className="modal-stat-label">ABV</p>
              <p className="modal-stat-value amber">{bottle.abv}%</p>
            </div>
            <div className="modal-stat">
              <p className="modal-stat-label">Volume</p>
              <p className="modal-stat-value">{bottle.volume}ml</p>
            </div>
            <div className="modal-stat">
              <p className="modal-stat-label">Origin</p>
              <p className="modal-stat-value" style={{ fontSize: '13px' }}>
                {flag} {bottle.origin}
              </p>
            </div>
            {bottle.year && (
              <div className="modal-stat">
                <p className="modal-stat-label">Vintage</p>
                <p className="modal-stat-value">{bottle.year}</p>
              </div>
            )}
          </div>

          <p className="modal-description-label">Tasting Notes</p>
          <p className="modal-description">{bottle.description}</p>
        </div>
      </div>
    </div>
  );
}
