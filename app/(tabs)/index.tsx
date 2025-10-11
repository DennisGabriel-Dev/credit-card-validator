import { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { validateCardNumber } from '../utils/lunhCalc';
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
    <View>
      <Text style={styles.titleContainer}>
        Validador de Cartão de Crédito
      </Text>

      <TextInput
       placeholder='Digite o Número do carão aqui'
       value={cardNumber}
       onChange={(e) => setCardNumber(e.target.value)}
       style={styles.textInput}
       />

      <Text style={styles.textValid}>
        {valid ? 'Número de cartão válido' : 'Número de cartão inválido'}
      </Text>

      {valid && (
        <Text style={styles.textBrand}>
          Bandeira do cartão: {brand}
        </Text>
      )}
    </View>
  );
}
