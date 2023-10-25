import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../componentes/Logo';


export default function Login() {
  return (
    
    <View style={styles.container}>
        <Logo></Logo>
      <Text style={styles.texto}>Digite seus dados</Text>
      <TextInput style={styles.textinput}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D977C8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  texto:{
    height: 90,
    fontSize:25,
    fontWeight: 'bold'
  },

  textinput:{
    width: 200,
    height: 90,
    borderWidth: 1,
    borderColor: '#fafafa',

  },
})