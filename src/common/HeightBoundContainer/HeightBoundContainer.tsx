import { useRef } from 'react';

import { useClientHeight } from 'hooks/useClientHeight';
import { HeightBoundContainerProps } from 'types/commonTypes';

export const HeightBoundContainer = ({children,className}:HeightBoundContainerProps) => {
    const heightBoundContainerRef=useRef<HTMLDivElement>(null);
    const heightBoundContainerHeight=useClientHeight(heightBoundContainerRef,'0%');

    return (
        <div ref={heightBoundContainerRef}  style={{height:heightBoundContainerHeight}} className={`${className ? className : ''}`}>
            {children}
        </div>
    )
}
