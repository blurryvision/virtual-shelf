import ShelfRack from '@/components/ShelfRack';
import { getAllBottles } from '@/lib/bottles';

export default function HomePage() {
  const bottles = getAllBottles();

  return (
    <main className="page-wrapper">
      <ShelfRack bottles={bottles} />
    </main>
  );
}
