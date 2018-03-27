import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// // const store = createStore(
// //   rootReducer,
// //   applyMiddleware(...middleware),
// // );
const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
