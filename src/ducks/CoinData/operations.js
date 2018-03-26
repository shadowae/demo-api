import actions from './actions';


const fetchCoinData = (dispatch) => {
  fetch('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10')
  .then(response => response.json())
  .then((data) => {
    dispatch(actions.storeCoinData(data));
  })
  .catch(err => console.error(this.props.url, err.toString()))
};

export default {
  fetchCoinData,
};
