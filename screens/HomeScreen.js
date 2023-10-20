import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.header}>Bem-vindo à Página Inicial</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.buttonText}>Recuperação de Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alteração na propriedade justifyContent
    alignItems: 'center',
    backgroundColor: '#525861', // Fundo cinza escuro
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 12,
  },
  header: {
    fontSize: 30,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    width: '80%',
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#007BFF',
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
