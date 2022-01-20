import {
  useEffect,
  useState,
} from 'react';

export const useMountAnimation = ()=>{
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    return mounted;
}