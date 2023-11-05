import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable, TextInput } from 'react-native';

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Lets Go!</Text>
      <TextInput style={styles.input} placeholder='username'/>
      <TextInput style={styles.input} placeholder='password'/>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Log In</Text>
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
    height: 35,
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  title: {
    fontFamily: 'arial',
    fontSize: 50,
    color: '#8fb35b',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  }
});
