import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/Index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import CRouter from './routes/Router';
import store from './store/Store';

store.subscribe(function () {
  //console.log(store.getState());
});

ReactDOM.render(<Provider store={store}>
  <CRouter store={store} />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
