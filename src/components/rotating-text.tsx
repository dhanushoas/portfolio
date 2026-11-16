'use client';

import { useEffect, useState } from 'react';

/** Cycles through words with a soft slide. Screen readers get the full list once; reduced-motion users see the first word. */
export function RotatingText({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex">
      <span className="sr-only">{words.join(', ')}</span>
      <span
        key={i}
        aria-hidden="true"
        className="text-gradient animate-in fade-in slide-in-from-bottom-2 font-semibold duration-500"
      >
        {words[i]}
      </span>
    </span>
  );
}
