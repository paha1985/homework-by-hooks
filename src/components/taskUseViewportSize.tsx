import { useViewPortSize } from "../hooks/use-viewport-size";

export function TaskUseViewportSize() {
  const { height, width } = useViewPortSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
