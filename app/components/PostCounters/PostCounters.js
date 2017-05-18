import React, { Component } from 'react';
import { View } from 'react-native';
import PostCounterWithIcon from '../PostCounterWithIcon';
import styles from './styles';

class PostCounters extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <PostCounterWithIcon value={this.props.post.ups} icon='arrow-round-up' />
        <PostCounterWithIcon value={this.props.post.comment_count} icon='chatboxes' />
        <PostCounterWithIcon value={this.props.post.views} icon='eye' />
      </View>
    );
  }
}

export default PostCounters;
