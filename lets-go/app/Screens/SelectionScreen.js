import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Tile from '../components/Tile'; 

const data = [
  {
    id: '1',
    name: 'Meeting 1',
    date: '2023-11-10',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '2',
    name: 'Meeting 2',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '3',
    name: 'Meeting 3',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '4',
    name: 'Meeting 4',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '5',
    name: 'Meeting 5',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '6',
    name: 'Meeting 6',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '7',
    name: 'Meeting 7',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '8',
    name: 'Meeting 8',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '9',
    name: 'Meeting 9',
    date: '2023-11-15',
    image: 'https://picsum.photos/200/200',
  },
  
  // Add more data items as needed
];

const renderItem = ({ item }) => {
    return (
        <Tile
        name={item.name}
        date={item.date}
        image={item.image}
        />
    );
    };

const renderItemWithSpacer = ({ item, index }) => {
    if (index === data.length - 1 && data.length % 2 === 1) {
      // Render an empty "spacer" tile in the bottom right corner
      return (
        <>
          <Tile name={item.name} date={item.date} image={item.image} />
          <View style={styles.spacer}></View>
        </>
      );
    }
  
    return <Tile name={item.name} date={item.date} image={item.image} />;
  };

export default function SelectionScreen() {
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItemWithSpacer}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </SafeAreaView>
    );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#8fb35b',
    },
    spacer: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'white',
      },
  });
