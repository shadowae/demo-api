import { combineReducers } from 'redux';
import types from './types';

const defaultState = {};

const coin = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_COIN_DATA:
      return action.coinData;
    default:
      return state;
  }
};
const reducer = combineReducers({
  coin,
});

export default reducer;
