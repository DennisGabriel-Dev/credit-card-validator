import CardDisplay from '@/components/CardDisplay';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, Text, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { validateCardNumber } from '../utils/luhnCalc';
import { identificarBandeira } from '../utils/regexBandeira';
import styles from './styles';

export default function HomeScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(validateCardNumber(cardNumber));
    setBrand(identificarBandeira(cardNumber));
  }, [cardNumber]);

  return (
    <KeyboardAvoidingView 
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.titleContainer}>
            Validador de Cartão de Crédito
          </Text>

          <MaskedTextInput
           mask="9999 9999 9999 9999 999"
           placeholder='Digite o Número do cartão aqui'
           placeholderTextColor='#6B728f'
           value={cardNumber}
           onChangeText={(text) => setCardNumber(text)}
           keyboardType='numeric'
           style={styles.textInput}
           />

          <Text style={valid ? styles.textValid : styles.textInvalid}>
            {valid ? 'Número de cartão válido' : 'Número de cartão inválido'}
            {valid && brand && ` - ${brand}`}
          </Text>

          <CardDisplay brand={brand} cardNumber={cardNumber} valid={valid} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
