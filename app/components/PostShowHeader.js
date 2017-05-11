import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Icon, Right, Left, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles/PostShowHeaderStyles';

export default class PostShowHeader extends Component {
  render() {
    const iconStyle = StyleSheet.flatten(styles.iconStyle);

    return (
      <Header>
        <Left>
          <Button transparent onPress={Actions.PostIndex}>
            <Icon name="arrow-back" />
          </Button>
        </Left>

        <Right>
          <Icon name="md-arrow-round-up" style={iconStyle} />
          <Icon name="md-arrow-round-down" style={iconStyle} />
          <Icon name="heart" style={iconStyle} />
          <Icon name="md-share" style={iconStyle} />
        </Right>
      </Header>
    );
  }
}
