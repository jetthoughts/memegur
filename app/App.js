import ReduxThunk from 'redux-thunk';
import React, { Component } from 'react';
import RootContainer from './containers/RootContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RootContainer />
      </Provider>
    );
  }
}
