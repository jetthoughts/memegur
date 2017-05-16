import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import colors from '../constants/Colors';

import FooterComponent from '../components/FooterComponent';
import PostShowHeader from '../components/PostShowHeader';

const styles = {
  container: {
    backgroundColor: colors.mainBackground,
  },
};

export default class PostShowComponent extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <PostShowHeader />
        <ScrollView />
        <FooterComponent />
      </Container>
    );
  }
}
