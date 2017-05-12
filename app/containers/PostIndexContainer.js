import React, { Component } from 'react';
import { Container } from 'native-base';

import FooterComponent from '../components/FooterComponent';
import PostList from '../components/PostList';
import MainHeader from '../components/MainHeader';
import colors from '../themes/Colors';

const styles = {
  container: {
    backgroundColor: colors.mainBackground,
  },
};

export default class PostIndexComponent extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <MainHeader />
        <PostList />
        <FooterComponent />
      </Container>
    );
  }
}
