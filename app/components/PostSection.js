import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PostSection extends Component {
  render() {
    return (
      <TouchableOpacity style={[ styles.containerStyle, this.props.style ]} onPress={Actions.PostShow}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'dimgray',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};
