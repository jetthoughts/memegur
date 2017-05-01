import React, { Component } from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import FooterContainer from './FooterComponent';
import PostList from '../components/PostList';
import MainHeader from '../components/MainHeader';

export default class RootContainer extends Component {
  render() {
    return (
      <Container>
        <MainHeader />
        <PostList />
        <FooterContainer />
      </Container>
    );
  }
}
