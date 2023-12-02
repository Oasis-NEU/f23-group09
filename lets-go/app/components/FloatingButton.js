import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



// A floating action button with a plus icon in the center
// and a background color of #8fb35b and a white plus icon
export default function FloatingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={ styles.button }>
        <Text style={ styles.text }>+</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8fb35b',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    right: 25,
    //thin white border
    borderWidth: 4,
    borderColor: '#728F48'
  },

  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
})