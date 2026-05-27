import React, { useState } from 'react';

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function App() {

  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  async function cadastrar() {

    try {

      const response = await fetch('http://192.168.15.8:8080/', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          user: user,
          senha: senha,
          email: email
        })
      });

      if(response.ok){

        Alert.alert('Sucesso', 'Usuário cadastrado!');

      } else {

        Alert.alert('Erro ao cadastrar');
      }

    } catch(error){

      console.log(error);

      Alert.alert('Erro de conexão');
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Cadastro Cliente
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  }
});