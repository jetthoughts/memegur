import React, { Component } from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import FooterContainer from './FooterComponent';

export default class RootContainer extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content />
        <FooterContainer />
      </Container>
    );
  }
}
