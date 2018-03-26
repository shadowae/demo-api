import types from './types';

// COIN DATA
const storeCoinData = coindata => ({
  type: types.GET_COIN_DATA,
  coinData: coindata,
});

export default {
  storeCoinData,
};
