import { CARD_CONFIG } from '@/constants/cardConfig';
import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  titleContainer: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
  textInput: {
    height: CARD_CONFIG.inputHeight,
    borderColor: COLORS.primary,
    borderWidth: CARD_CONFIG.inputBorderWidth,
    borderRadius: CARD_CONFIG.inputBorderRadius,
    marginTop: 20,
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBackground,
    color: COLORS.textPrimary,
    fontSize: 16,
  },
  textValid: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
  },
  textInvalid: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.error,
  },
});

export default styles;