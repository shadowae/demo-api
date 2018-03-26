const io = require('socket.io')();
const fetch = require('node-fetch');

const baseAPI = 'https://api.coinmarketcap.com/v1/ticker/';
const limit10API = '?limit=10';
const start100Limit12API = '?start=100&limit=12';
let tempValue = null;
io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      // client.emit('timer', new Date());tempValue
      loadData();
      console.log(tempValue);
      client.emit('timer', tempValue);
    }, interval);
  });
});

function loadData() {
  fetch(`${baseAPI}${limit10API}`)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // this.setState({ data });
      tempValue = data;
    })
    .catch(err => console.error(this.props.url, err.toString()));
}

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

