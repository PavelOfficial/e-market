import { useEffect, useRef } from 'react';

export const useScrollLoading = (onNewLoad, loadTirgerDistance) => {
  const box = useRef(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (box.current) {
        const rect = box.current.getBoundingClientRect();
        const client = {
          height: document.documentElement.clientHeight,
        };

        const bottomEdge = rect.top + rect.height;
        const buttomEdgeOverlay = bottomEdge - client.height;
        if (buttomEdgeOverlay <= loadTirgerDistance) {
          onNewLoad();
        }
      }
    };

    const animationDescriptor = {
      current: 0,
    };

    const handleAnimationFrame = () => {
      handleWindowScroll();

      animationDescriptor.current = requestAnimationFrame(handleAnimationFrame);
    };

    animationDescriptor.current = requestAnimationFrame(handleAnimationFrame);

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      cancelAnimationFrame(animationDescriptor.current);
    };
  }, [onNewLoad, loadTirgerDistance]);

  return {
    ref: box,
  };
};
