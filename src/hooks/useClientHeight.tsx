import {
  useLayoutEffect,
  useState,
} from 'react';

import { UseClientHeight } from 'types/hooksTypes';

export const  useClientHeight:UseClientHeight=(ref,initialValue)=>{
    const [elementHeight,setElementHeight]=useState(initialValue);
    useLayoutEffect(()=>{
        const elementYposition=ref.current?.getBoundingClientRect().y;
        setElementHeight(`calc(100% - ${elementYposition}px)`)
    },[ref]);

    return elementHeight;
}