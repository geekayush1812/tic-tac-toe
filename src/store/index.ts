import {
  compose,
  createStore,
} from 'redux';

import { rootReducer } from './reducers';

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store =createStore(rootReducer,composeEnhancers())
export { store };

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;