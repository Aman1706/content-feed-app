import {combineReducers} from 'redux';

import contents from './contents';
import articles from './articles';
import videos from './videos';

export const reducers = combineReducers({contents, articles, videos});
