import { combineReducers } from 'redux';

import { breakPointReducer } from './breakPointsReducer';
import { gameMenuReducer } from './gameMenuReducer';

const rootReducer=combineReducers({breakPointReducer,gameMenuReducer});

export { rootReducer };