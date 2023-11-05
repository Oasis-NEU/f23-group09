import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform,
  Dimensions
} from 'react-native';
import { SelectionScreen } from './app/Screens/SelectionScreen';


export default function App() {
  console.log(Dimensions.get("screen"))
  return (
    <>
    <SelectionScreen />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fb35b',

    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  baseText: {
    color: 'white',
    fontFamily: 'Futura-Medium',
    fontWeight: 'bold'
  }
});
