import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';

import PostShowHeader from '../components/PostShowHeader';

export default class PostShowComponent extends Component {
  render() {
    return (
      <Container>
        <PostShowHeader />
        <ScrollView />
      </Container>
    );
  }
}
