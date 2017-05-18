import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Gallery from './Gallery';
import PostShowContainer from './PostShowContainer';

export default class RootContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="PostIndex" component={Gallery} initial hideNavBar />
        <Scene key="PostShow" component={PostShowContainer} hideNavBar />
      </Router>
    );
  }
}
