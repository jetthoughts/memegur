import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { block, inline } from './styles';

class PostCounterWithIcon extends Component {
  render() {
    const styles = this.props.inline ? inline : block;
    const { counterStyle, iconStyle, textStyle } = styles;

    return (
      <View style={counterStyle}>
        <Icon active style={iconStyle} name={this.props.icon} />
        <Text style={textStyle}>{this.props.value}</Text>
      </View>
    );
  }
}

export default PostCounterWithIcon;
