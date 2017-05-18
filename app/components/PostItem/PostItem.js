import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PostSection from '../PostSection';
import PostCounters from '../PostCounters';
import styles from './styles';

class PostItem extends Component {
  render() {
    const { postContainerStyle, postTitleStyle, postImageStyle } = styles;

    return (
      <View style={postContainerStyle}>
        <PostSection style={{ flexDirection: 'column' }} albumId={this.props.post.id}>
          <Text
            numberOfLines={1}
            style={postTitleStyle}>
            {this.props.post.title}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            {/* TODO: Image component - https://github.com/EnragedWildkin/memegur/issues/14 */}
            <Image
              style={postImageStyle}
              source={{ uri: this.props.post.link }}
            />

            <PostCounters post={this.props.post}/>
          </View>
        </PostSection>
      </View>
    );
  }
}

export default PostItem;
