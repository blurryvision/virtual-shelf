'use client';

import { useState } from 'react';
import BottleCard from './BottleCard';
import BottleModal from './BottleModal';
import { Bottle } from '@/lib/bottles';

interface ShelfRackProps {
  bottles: Bottle[];
}

const COLUMNS = 4;

export default function ShelfRack({ bottles }: ShelfRackProps) {
  const [selectedBottle, setSelectedBottle] = useState<Bottle | null>(null);

  // Pad to nearest multiple of COLUMNS so grid is always full
  const totalCells = Math.ceil(bottles.length / COLUMNS) * COLUMNS;
  const cells: (Bottle | null)[] = [
    ...bottles,
    ...Array(totalCells - bottles.length).fill(null),
  ];

  return (
    <>
      <section className="shelf-unit" aria-label="Bottle collection shelf">
        <div className="shelf-grid">
          {cells.map((bottle, i) => (
            <div key={bottle ? bottle.id : `empty-${i}`} className="shelf-cell">
              {bottle ? (
                <BottleCard
                  bottle={bottle}
                  onClick={setSelectedBottle}
                  style={{ animationDelay: `${i * 0.06}s` }}
                />
              ) : (
                <div className="shelf-cell-empty" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <BottleModal
        bottle={selectedBottle}
        onClose={() => setSelectedBottle(null)}
      />
    </>
  );
}
