import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PostIndexContainer from './PostIndexContainer';
import PostShowContainer from './PostShowContainer';

export default class RootContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="PostIndex" component={PostIndexContainer} initial hideNavBar />
        <Scene key="PostShow" component={PostShowContainer} hideNavBar />
      </Router>
    );
  }
}
