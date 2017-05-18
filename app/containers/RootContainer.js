import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Gallery from './Gallery';
import Album from './Album';

export default class RootContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="Gallery" component={Gallery} initial hideNavBar />
        <Scene key="Album" component={Album} hideNavBar />
      </Router>
    );
  }
}
