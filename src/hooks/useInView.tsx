import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const alreadyTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce && alreadyTriggered.current) return;
        const isInView = entry.isIntersecting;
        setInView(isInView);
        if (isInView && triggerOnce) {
          alreadyTriggered.current = true;
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
};