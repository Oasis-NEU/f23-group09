import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { supabase } from '../../supabase';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async () => {
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return;
    }

    
    let { data: User, error } = await supabase
    .from('User')
    .select('*')
    
  }

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Lets Go!</Text>
      <TextInput style={styles.input} placeholder='username' onChangeText={(text) => setUsername}/>
      <TextInput style={styles.input} placeholder='email' onChangeText={(text) => setEmail}/>
      <TextInput style={styles.input} placeholder='password' secureTextEntry={true} onChangeText={(text) => setPassword}/>
      <TextInput style={styles.input} placeholder='confirm password'secureTextEntry={true} onChangeText={(text) => setConfirmPassword}/>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Log In')}
      >
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ead2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8fb35b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 45,
    margin: 3,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#6c584c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 35,
    width: 150,
    margin: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#8fb35b',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  }
});
