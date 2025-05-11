import { useCallback, useEffect, useRef, useState } from "react";

type HoverResultType = {
    hovered: boolean;
    ref: any;
}

export const useHover = (): HoverResultType => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<HTMLElement>(null);

    const handleMouseOver = useCallback(() => setHovered(true),[])
    const handleMouseOut = useCallback(() => setHovered(false), [])


    useEffect(() => {    
        const node = ref.current;
        if (!node) return;

        node.addEventListener('mouseenter', handleMouseOver);
        node.addEventListener('mouseleave', handleMouseOut);
    }, [handleMouseOver, handleMouseOut]);

    

    return { hovered, ref }
}