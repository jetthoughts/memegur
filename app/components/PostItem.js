import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PostSection from './PostSection';

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
        <View>
          {/* TODO: Counter component - https://github.com/EnragedWildkin/memegur/issues/12 */}
          <Text style={{ color: 'lightgray' }}>{this.props.post.rates}</Text>
          <Text style={{ color: 'lightgray' }}>{this.props.post.comments}</Text>
          <Text style={{ color: 'lightgray' }}>{this.props.post.views}</Text>
        </View>
      </PostSection>
    );
  }
}

const styles = {
  postImageStyle: {
    height: 150,
    width: 150
  }
};

export default PostItem;
