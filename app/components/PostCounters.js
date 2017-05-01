import React, { Component } from 'react';
import { View } from 'react-native';
import PostCounterWithIcon from './PostCounterWithIcon';

class PostCounters extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <PostCounterWithIcon value={this.props.post.rates} icon='arrow-round-up' />
        <PostCounterWithIcon value={this.props.post.comments} icon='chatboxes' />
        <PostCounterWithIcon value={this.props.post.views} icon='eye' />
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
