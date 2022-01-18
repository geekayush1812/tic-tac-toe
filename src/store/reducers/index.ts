import { combineReducers } from 'redux';

import { breakPointReducer } from './breakPointsReducer';
import { gameMenuReducer } from './gameMenuReducer';
import { playgroundReducer } from './playgroundReducer';

const rootReducer=combineReducers({breakPointReducer,gameMenuReducer,playgroundReducer});

export { rootReducer };