import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Logo from '../componentes/Logo';






export default function Acessar() {


  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Text style={styles.texto}>Seja bem vindo aos melhores doces do Brasil!</Text>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 18,
    fontWeight: 'bold'
  },
 


});


