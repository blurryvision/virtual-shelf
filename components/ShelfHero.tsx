'use client';

interface ShelfHeroProps {
  bottleCount: number;
}

export default function ShelfHero({ bottleCount }: ShelfHeroProps) {
  return (
    <header className="hero">
      <p className="hero-eyebrow">✦ Personal Collection ✦</p>
      <h1 className="hero-title">
        The <span>Virtual</span> Shelf
      </h1>
      <p className="hero-tagline">
        A curated showcase of miniature spirits from around the world — each bottle a story, each sip a journey.
      </p>
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        {bottleCount} bottles in the collection
      </div>
      <div className="hero-divider" />
    </header>
  );
}
