import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();

  const calculaIMC = () => {
    let n1 = parseFloat(peso)
    let n2 = parseFloat(altura)

    let imc = n1 / (n2 * n2)

    if (imc < 18.5) {
      setResultado("Abaixo do peso")
    } else if (imc >= 18.5 && imc < 25) {
      setResultado("Peso Normal")
    } else if (imc >= 25 && imc < 30) {
      setResultado("Acima do peso")
    } else {
      setResultado("Obesidade")
    }
    return resultado
  }

  return (
    <View style={styles.container}>
      <Text>Peso</Text>
      <TextInput style={styles.input} value={peso} onChangeText={peso => setPeso(peso)}></TextInput>
      <Text>Altura</Text>
      <TextInput style={styles.input} value={altura} onChangeText={altura => setAltura(altura)}></TextInput>
      <Button title='Calcular' onPress={() => calculaIMC()} />
      <Text>Seu IMC esta no estagio: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F00',
    color: '#FFF',
    borderRadius: '1px',
  },
  button: {
    fontSize: '15px'
  }
});

export default App
