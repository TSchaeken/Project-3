import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bulma/css/bulma.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
  <Provider
    store={composeStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
