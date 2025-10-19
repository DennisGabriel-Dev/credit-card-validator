import { CARD_CONFIG } from '@/constants/cardConfig';
import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: CARD_CONFIG.cardPadding,
    borderRadius: CARD_CONFIG.cardBorderRadius,
    width: CARD_CONFIG.cardWidth,
    height: CARD_CONFIG.cardHeight,
    justifyContent: 'space-between',
  },
  textCard: {
    color: COLORS.textWhite,
    fontSize: 18,
    letterSpacing: 2,
  },
  textCardBrand: {
    color: COLORS.textWhite,
    fontSize: 18,
  },
  brandLogoContainer: {
    alignItems: 'flex-end',
  },
  brandLogo: {
    width: CARD_CONFIG.logoWidth,
    height: CARD_CONFIG.logoHeight,
  }
});

export default styles;