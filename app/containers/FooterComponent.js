import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterContainer extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="home" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
