import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

interface ViewportSize {
  width: number;
  height: number;
}

export function useViewPortSize(): ViewportSize {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const setSizes = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useWindowEvent("resize", setSizes);

  return { height: height ?? 0, width: width ?? 0 };
}
