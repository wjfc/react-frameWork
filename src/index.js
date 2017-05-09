import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/index';
import configure from './store/index';
import rootSaga from './sagas/index';
const store = configure();
store.runSaga(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
