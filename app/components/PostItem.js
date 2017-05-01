import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PostSection from './PostSection';
import PostCounterWithIcon from './PostCounterWithIcon';

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

        {/* TODO: Counters list component - https://github.com/EnragedWildkin/memegur/issues/13 */}
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <PostCounterWithIcon value={this.props.post.rates} icon='arrow-round-up' />
          <PostCounterWithIcon value={this.props.post.comments} icon='chatboxes' />
          <PostCounterWithIcon value={this.props.post.views} icon='eye' />
        </View>
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
