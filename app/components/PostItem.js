import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import PostSection from './PostSection';
import PostCounters from './PostCounters';
import { DEFAULT_IMAGE_URL } from '../config';

class PostItem extends Component {
  render() {
    const { postContainerStyle, postTitleStyle, postImageStyle } = styles;
    return (
      <View style={postContainerStyle}>
        <PostSection style={{ flexDirection: 'column' }}>
          <Text
            numberOfLines={1}
            style={postTitleStyle}>
            {this.props.post.title}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            {/* TODO: Image component - https://github.com/EnragedWildkin/memegur/issues/14 */}
            <Image
              style={styles.postImageStyle}
              source={{ uri: this.props.post.link || DEFAULT_IMAGE_URL }}
            />

            <PostCounters post={this.props.post}/>
          </View>
        </PostSection>
      </View>
    );
  }
}

const styles = {
  postContainerStyle: {
    backgroundColor: '#333',
    padding: 10,
    paddingBottom: 0
  },
  postImageStyle: {
    flex: 4,
    height: 150,
    width: 150
  },
  postTitleStyle: {
    padding: 5,
    paddingBottom: 10,
    color: '#fff',
    fontSize: 14,
    flex: 1
  }
};

export default PostItem;
