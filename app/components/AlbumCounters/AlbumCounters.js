import React, { Component } from 'react';
import { View } from 'react-native';
import PostCounterWithIcon from '../PostCounterWithIcon/index';
import styles from './styles';

class AlbumCounters extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <PostCounterWithIcon inline value={this.props.album.ups} icon='arrow-round-up' />
        <PostCounterWithIcon inline value={this.props.album.comment_count} icon='chatboxes' />
        <PostCounterWithIcon inline value={this.props.album.views} icon='eye' />
      </View>
    );
  }
}

export default AlbumCounters;
