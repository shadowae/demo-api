

import { combineReducers } from 'redux';
// import the sub reducers
import coin from './CoinData/reducers';

const rootReducer = combineReducers({
  coin,
  // selectedSubreddit
});

export default rootReducer;
