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
import SelectionScreen from './app/Screens/SelectionScreen';
import LoginPage from './app/Screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './app/Screens/SignUpScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  console.log(Dimensions.get("screen"))
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={ LoginPage } />
        <Stack.Screen name="Selection Page" component={ SelectionScreen } />
        <Stack.Screen name="Sign Up" component={ SignUpScreen } />
      </Stack.Navigator>
    </NavigationContainer>
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
