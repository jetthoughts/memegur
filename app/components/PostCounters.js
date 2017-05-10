import React, { Component } from 'react';
import { View } from 'react-native';
import PostCounterWithIcon from './PostCounterWithIcon';

class PostCounters extends Component {
  render() {
    const { ups, comment_count, views } = this.props.post;

    return (
      <View style={styles.containerStyle}>
        <PostCounterWithIcon value={ups} icon='arrow-round-up' />
        <PostCounterWithIcon value={comment_count} icon='chatboxes' />
        <PostCounterWithIcon value={views} icon='eye' />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around'
  }
}

export default PostCounters;
