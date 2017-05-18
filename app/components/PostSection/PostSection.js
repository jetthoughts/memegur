import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class PostSection extends Component {
  render() {
    return (
      <TouchableOpacity style={[ styles.containerStyle, this.props.style ]} onPress={Actions.Album}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
