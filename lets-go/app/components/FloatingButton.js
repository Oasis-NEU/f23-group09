import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default props => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <View
      style={{
        backgroundColor: 'white',
        width: 45,
        height: 45,
        borderRadius: 45,
      }}
    />
  </TouchableOpacity>
);