import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import colors from '../constants/Colors';

import FooterComponent from '../components/FooterComponent';
import PostShowHeader from '../components/PostShowHeader';
import albumActions from '../actions/Album';

const styles = {
  container: {
    backgroundColor: colors.mainBackground,
  },
};

class Album extends Component {
  componentWillMount() {
    this.props.fetchAlbum(this.props.albumId);
  }

  render() {
    return (
      <Container style={styles.container}>
        <PostShowHeader />
        <ScrollView />
        <FooterComponent />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (albumId) => dispatch(albumActions.albumFetch(albumId)),
});

const mapStateToProps = (state) => {
  return { album: state.album };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
