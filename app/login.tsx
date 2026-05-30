import { Link } from 'expo-router';
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
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    
    async function login() {

        try {   
            const response = await fetch('http://192.168.15.8:8080/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    senha: senha,
                    email: email
                })
            });
                if(response.ok) {

                    Alert.alert('Sucesso', 'Login realizado!');
                }
            else {
                Alert.alert('Erro ao realizar login');
            }
        }
        catch(error) {
                    console.log(error);
                    Alert.alert('Erro de conexão');
                }    
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Login
            </Text>
            <Link href="/cadastro">Criar conta</Link>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Button title="Login" onPress={login} />
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