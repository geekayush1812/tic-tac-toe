import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { breakPointReducer } from './breakPointsReducer';
import { gameMenuReducer } from './gameMenuReducer';
import { playgroundReducer } from './playgroundReducer';

const rootReducer=combineReducers({breakPointReducer,gameMenuReducer,playgroundReducer,appReducer});

export { rootReducer };