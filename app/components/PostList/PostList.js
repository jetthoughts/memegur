import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PostItem from '../PostItem';
import { actionCreators } from '../../reducers/GalleryReducer';

class PostList extends Component {
  componentWillMount() {
    this.props.loadGallery('hot');
  }

  _renderPost({ item }) {
    return (
      <PostItem key={item.id} post={item} />
    );
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return(
      <FlatList
        data={this.props.posts}
        renderItem={this._renderPost}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadGallery: (galleryName) => dispatch(actionCreators.galleryRequest(galleryName)),
});

const mapStateToProps = state => {
  return { posts: state.posts.posts };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
