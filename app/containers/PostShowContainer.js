import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Icon, Right, Left, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const styles = {
  iconStyle: {
    padding: 5,
  }
};

export default class PostShowComponent extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={Actions.PostIndex}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Right>
            <Icon name="md-arrow-round-up" style={styles.iconStyle} />
            <Icon name="md-arrow-round-down" style={styles.iconStyle} />
            <Icon name="heart" style={styles.iconStyle} />
            <Icon name="md-share" style={styles.iconStyle} />
          </Right>
        </Header>
      </Container>
    );
  }
}
