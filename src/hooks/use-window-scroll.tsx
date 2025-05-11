import { useState } from 'react';
import { useWindowEvent } from "./use-window-event";

interface ScrollPosition {
  x: number;
  y: number;
}

type ScrollToOptions = Partial<ScrollPosition>;

export function useWindowScroll(): [ScrollPosition, (options: ScrollToOptions) => void] {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

    const handleScroll = () => {
        setPosX(window.scrollX);
        setPosY(window.scrollY);
    };

const scrollTo = (options: ScrollToOptions) => {
    window.scrollTo({
      left: options.x ?? posX,
      top: options.y ?? posY
    });
  }

    useWindowEvent("scroll", handleScroll);

  return [{x: posX ?? 0, y: posY ?? 0}, scrollTo];
}