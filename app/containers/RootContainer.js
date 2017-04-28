'use strict'

import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Body } from 'native-base';

export default class RootContainer extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Body>
          <Title>Header</Title>
          </Body>
        </Header>
        <Content>
    
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
