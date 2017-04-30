import React, { Component } from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import FooterContainer from './FooterComponent';
import MainHeader from '../components/MainHeader';

export default class RootContainer extends Component {
  render() {
    return (
      <Container>
        <MainHeader />
        <Content />
        <FooterContainer />
      </Container>
    );
  }
}
