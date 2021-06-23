import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {reducers} from './src/app/redux/reducers';

import App from './App';
import {name as appName} from './app.json';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
// store.subscribe(() => {
//   console.log(store.getState());
// });

const contentFeed = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => contentFeed);
