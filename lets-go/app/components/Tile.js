import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

const Tile = ({ name, date, image }) => {
  return (

    <View style={styles.tileContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 4,
    color: 'gray',
  },
});

export default Tile;
