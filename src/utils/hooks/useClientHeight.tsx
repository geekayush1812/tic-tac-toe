import {
  useLayoutEffect,
  useState,
} from 'react';

import { UseClientHeight } from 'types/hooksTypes';

const useClientHeight:UseClientHeight=(ref,initialValue)=>{
    const [elementHeight,setElementHeight]=useState(initialValue);
    useLayoutEffect(()=>{
        const elementYposition=ref.current?.offsetTop;
        setElementHeight(`calc(100% - ${elementYposition}px)`)
    },[ref]);

    return elementHeight;
}
export default useClientHeight;