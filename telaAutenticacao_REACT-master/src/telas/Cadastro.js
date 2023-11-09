import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Logo from '../componentes/Logo';
 


export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');


  const handleCadastro = () => {
    // Lógica de cadastro
    if (email && senha && senha === confirmarSenha) {
      // Lógica de cadastro bem-sucedida
      alert('Cadastro realizado com sucesso');
      setEmail = email
      setSenha = senha
      navigation.navigate('Login'); // Redireciona para a tela de login
    } else {
      alert('Preencha todos os campos corretamente e confirme a senha.');
    }
  };


  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.texto}>E-mail:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Informe seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.texto}>Senha:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Informe sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Text style={styles.texto}>Confirmar senha:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />


      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textinput: {
    width: 280,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#000',
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
