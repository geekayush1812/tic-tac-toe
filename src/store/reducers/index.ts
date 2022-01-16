import { combineReducers } from 'redux';

import { breakPointReducer } from './breakPointsReducer';

const rootReducer=combineReducers({breakPointReducer});

export { rootReducer };