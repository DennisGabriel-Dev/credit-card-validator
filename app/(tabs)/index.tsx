import CardDisplay from '@/components/CardDisplay';
import { CARD_CONFIG } from '@/constants/cardConfig';
import { COLORS } from '@/constants/colors';
import { useCallback, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, Text, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { validateCardNumber } from '../utils/luhnCalc';
import { identificarBandeira } from '../utils/regexBandeira';
import styles from './styles';

export default function HomeScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [valid, setValid] = useState(false);

  const handleCardNumberChange = useCallback((text: string) => {
    setCardNumber(text);
    setValid(validateCardNumber(text));
    setBrand(identificarBandeira(text));
  }, []);

  return (
    <KeyboardAvoidingView 
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.titleContainer}>
            Validador de Cartão de Crédito
          </Text>

          <MaskedTextInput
           mask={CARD_CONFIG.mask}
           placeholder='Digite o Número do cartão aqui'
           placeholderTextColor={COLORS.textSecondary}
           value={cardNumber}
           onChangeText={handleCardNumberChange}
           keyboardType='numeric'
           style={styles.textInput}
           accessible={true}
           accessibilityLabel="Campo de número do cartão"
           accessibilityHint="Digite o número do seu cartão de crédito, entre 13 e 19 dígitos"
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
