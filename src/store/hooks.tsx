import {
  TypedUseSelectorHook,
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';
import type {
  AppDispatch,
  RootState,
} from 'store';

export const useDispatch=()=>useNativeDispatch<AppDispatch>();
export const useSelector:TypedUseSelectorHook<RootState>=useNativeSelector;