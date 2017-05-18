import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class PostSection extends Component {
  goToAlbumScene = () => {
    Actions.Album({ albumId: this.props.albumId });
  };

  render() {
    return (
      <TouchableOpacity style={[ styles.containerStyle, this.props.style ]} onPress={this.goToAlbumScene}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
