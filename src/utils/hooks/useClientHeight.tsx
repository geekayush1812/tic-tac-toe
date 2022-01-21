import {
  useLayoutEffect,
  useState,
} from 'react';

import { UseClientHeight } from 'types/hooksTypes';

const useClientHeight:UseClientHeight=(ref,initialValue)=>{
    const [elementHeight,setElementHeight]=useState(initialValue);
    useLayoutEffect(()=>{
      if(ref.current){
        const elementYposition=ref.current.getBoundingClientRect().y;
        setElementHeight(`calc(100% - ${elementYposition}px)`)
      }else{
        setElementHeight("100%");
      }
    },[ref]);

    return elementHeight;
}
export default useClientHeight;