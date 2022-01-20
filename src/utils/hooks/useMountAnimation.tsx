import {
  useEffect,
  useState,
} from 'react';

const useMountAnimation = ()=>{
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    return mounted;
}
export default useMountAnimation;