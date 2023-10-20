import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';

function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Adicione o logotipo e estilos para alinhar ao topo */}
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.header}>Recuperação de Senha</Text>
      <Text style={styles.label}>Insira seu endereço de e-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Enviar Email de Recuperação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinhe os elementos ao topo
    alignItems: 'center',
    backgroundColor: '#525861',
  },
  logo: {
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 32,
    marginBottom: 16,
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
});

export default ForgotPasswordScreen;
