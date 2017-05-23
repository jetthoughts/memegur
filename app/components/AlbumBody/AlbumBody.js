import React, { Component } from 'react';
import { Image, Text, StyleSheet, View, ScrollView } from 'react-native';
import { Card, CardItem } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class AlbumBody extends Component {
  render() {
    return (
      <ScrollView>
        <Card style={StyleSheet.flatten(styles.post)}>
          <CardItem header style={StyleSheet.flatten(styles.post)}>
            <View style={{ flex: 1 }}>
              <Text style={StyleSheet.flatten(styles.postHeaderTitle)}>
                {this.props.album.title}
              </Text>
              <View style={StyleSheet.flatten(styles.postHeaderMeta)}>
                <Text style={StyleSheet.flatten(styles.postHeaderMetaText)}>
                  {this.props.album.account_url}
                </Text>
                <Text style={StyleSheet.flatten(styles.postHeaderMetaText)}>
                  {this.props.album.datetime}
                </Text>
              </View>
            </View>
          </CardItem>
          <Image
            resizeMode={'contain'}
            style={{aspectRatio: 1}}
            source={{ uri: `https://i.imgur.com/${this.props.album.cover}.jpg` }}
          />
        </Card>
      </ScrollView>
    );
  }
}

AlbumBody.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumBody;
