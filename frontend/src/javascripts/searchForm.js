import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import SearchForm from './containers/searchForm';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

setTimeout(() => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <SearchForm />
    </Provider>
    , document.getElementById('search'));
}, 100)
