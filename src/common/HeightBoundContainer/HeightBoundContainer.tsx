import { useRef } from 'react';

import { HeightBoundContainerProps } from 'types/commonTypes';
import { useClientHeight } from 'utils/hooks';

const HeightBoundContainer = ({children,className}:HeightBoundContainerProps) => {
    const heightBoundContainerRef=useRef<HTMLDivElement>(null);
    const heightBoundContainerHeight=useClientHeight(heightBoundContainerRef,'0%');

    return (
        <div ref={heightBoundContainerRef}  style={{height:heightBoundContainerHeight}} className={`${className ? className : ''}`}>
            {children}
        </div>
    )
}
export default HeightBoundContainer;