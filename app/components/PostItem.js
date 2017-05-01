import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PostSection from './PostSection';
import PostCounters from './PostCounters';

class PostItem extends Component {
  render() {
    return(
      // TODO: Post component - https://github.com/EnragedWildkin/memegur/issues/15
      <PostSection>
        {/* TODO: Image component - https://github.com/EnragedWildkin/memegur/issues/14 */}
        <Image
          style={styles.postImageStyle}
          source={{ uri: this.props.post.source }}
        />

        <PostCounters post={this.props.post}/>
      </PostSection>
    );
  }
}

const styles = {
  postImageStyle: {
    flex: 3,
    height: 150,
    width: 150
  }
};

export default PostItem;
