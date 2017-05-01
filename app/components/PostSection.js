import React from 'react';
import { View } from 'react-native';

const PostSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'dimgray',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default PostSection;
