import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 14,
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
  },
  textCard: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 2,
  },
  textCardBrand: {
    color: '#fff',
    fontSize: 18,
  },
  brandLogoContainer: {
    alignItems: 'flex-end',
  },
  brandLogo: {
    width: 80,
    height: 50,
  }
});

export default styles;