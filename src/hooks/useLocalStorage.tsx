import {
  useCallback,
  useState,
} from 'react';

import { UseLocalStorageReturnType } from 'types/hooksTypes';
import { getLocalStorageValue } from 'utils/helpers/getLocalStorageValue';

export function useLocalStorage<T>(key:string):UseLocalStorageReturnType<T>{
    const [storedValue,setStoredValue] = useState<T>(()=>getLocalStorageValue(key));
    const setValue = useCallback((value:T) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(getLocalStorageValue(key));
        } catch (error) {
          console.log(error);
        }
    },[key]);

    return [storedValue,setValue];
};