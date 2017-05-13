import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

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

export default PostCounterWithIcon;
