import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Logo from '../componentes/Logo';
import Cadastro from './Cadastro';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleLogin = () => {
    // Lógica de autenticação
    if (email !== '' && senha !== '') {
      // Autenticação bem-sucedida
      alert('Autenticação bem-sucedida');
      
      // Redireciona para a página de login ou qualquer outra página necessária
    } else {
      alert('Infomações inválidas');
    }
  };


  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.texto}>Informe os dados para acessar:</Text>


      <TextInput
        style={styles.textinput}
        placeholder ='E-mail:' 
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder='Senha:'
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />


      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.buttonCad}
        onPress={() => navigation.navigate('Cadastro')} // Navegue para a página de cadastro
      >
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>
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
  textinput:{
    width: 280,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#000',
    marginTop: 20,
    borderRadius: 10
  },


  buttonCad:{
    color : '#A6445E',
   
   
  },


  button: {
    
    backgroundColor: '#A6445E',
    padding: 15,
    margin : 15,
    borderRadius: 20,
    marginLeft : 20
  },
  buttonText: {
    flex : 1,
    marginHorizontal : 100,
    flexDirection : 'row',
    color: 'white',
    fontSize: 18,
   
  },


});


