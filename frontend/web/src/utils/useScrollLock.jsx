import { useState } from 'react';

export function useScrollLock() {
  const [scrollY, setScrollY] = useState(0);

  const disableScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.pointerEvents = 'none';
    // if (dropdownElement)
      // dropdownElement.style.pointerEvents = 'auto';
  };

  const enableScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';  // Reset the overflow
    window.scrollTo(0, scrollY);  // Restore the scroll position
    document.body.style.pointerEvents = '';
  };

  return { disableScroll, enableScroll };
}