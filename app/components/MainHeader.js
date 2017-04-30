import React, { Component } from 'react';
import { Container, Header, Item, Picker, Left, Right, Icon, Title, Button } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';

class MainHeader extends Component {
  onButtonPress() {
    console.log(this);
  }

  render() {
    return (
      <Header>
        <Left>
          <Picker
            style={styles.pickerStyle}
            iosHeader='Categories'
            selectedValue='popular'
            onValueChange={(category) => console.log(this)}>
            <Picker.Item label='Popular' value='popular' />
            <Picker.Item label='Newest' value='newest' />
          </Picker>
        </Left>

        <Right>
          <Button
            transparent
            onPress={this.onButtonPress.bind(this)}>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    );
  }
};

const styles = {
  pickerStyle: {
    width: 100
  }
};


export default MainHeader;
