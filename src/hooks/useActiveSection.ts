'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0] || 'home');
  const key = ids.join(',');

  useEffect(() => {
    const list = key.split(',').filter(Boolean);
    if (!list.length) return;

    const update = () => {
      // 1. If at/near top of page, activate the first section
      if (window.scrollY < 80) {
        setActive(list[0]);
        return;
      }

      // 2. If at/near bottom of page, activate the last section (e.g. Contact)
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= totalHeight - 60) {
        setActive(list[list.length - 1]);
        return;
      }

      // 3. Find current section by bounding rect top
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [key, offset]);

  return [active, setActive] as const;
}
