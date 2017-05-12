import React, { Component } from 'react';
import { Header, Picker, Left, Right, Icon, Button } from 'native-base';
import colors from '../themes/Colors';

const styles = {
  pickerStyle: {
    width: 100,
  },
  header: {
    backgroundColor: colors.topNavigationBar,
    borderBottomColor: colors.barShadow,
  },
  filter: {
    color: 'white',
  },
  search: {
    color: 'white',
  },
};

class MainHeader extends Component {
  onButtonPress() {
    console.log(this);
  }

  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Picker
            textStyle={styles.filter}
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
            <Icon name='search' style={styles.search}/>
          </Button>
        </Right>
      </Header>
    );
  }
};

export default MainHeader;
