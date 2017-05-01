import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class PostCounterWithIcon extends Component {
  render() {
    const { postCounterStyle, iconStyle, textStyle } = styles;

    return (
      <View style={postCounterStyle}>
        <Icon active={true} style={iconStyle} name={this.props.icon} />
        <Text style={textStyle}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}

const styles = {
  postCounterStyle: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  iconStyle: {
    color: 'lightgray',
    fontSize: 18
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'lightgray',
    fontSize: 12
  }
};

export default PostCounterWithIcon;
