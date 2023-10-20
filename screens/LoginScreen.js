import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.header}>Login</Text>
      <Text style={styles.label}>Insira seu endereço de e-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <Text style={styles.label}>Insira sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.linkText}>Criar uma conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.linkText2}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alteração na propriedade justifyContent
    alignItems: 'center',
    backgroundColor: '#525861',
  },
  logo: {
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 30,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 4,
    color: '#ffffff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginBottom: 12,
  },
  linkText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  linkText2: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
