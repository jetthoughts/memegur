import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../constants/Colors';
import AlbumHeader from '../components/AlbumHeader';
import AlbumBody from '../components/AlbumBody';
import FooterComponent from '../components/FooterComponent';
import albumActions from '../actions/Album';

const styles = {
  container: {
    backgroundColor: colors.postBackground,
  },
};

class Album extends Component {
  componentWillMount() {
    this.props.fetchAlbum(this.props.albumId);
  }

  render() {
    return (
      <Container style={styles.container}>
        <AlbumHeader />
        <AlbumBody album={this.props.album} />
        <FooterComponent />
      </Container>
    );
  }
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
  fetchAlbum: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (albumId) => dispatch(albumActions.albumFetch(albumId)),
});

const mapStateToProps = (state) => {
  return { album: state.album.album };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
