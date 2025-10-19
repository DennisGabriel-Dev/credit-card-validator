import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  titleContainer: {
    color: '#10B981',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
  textInput: {
    height: 56,
    borderColor: '#10B981',
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#1E293B',
    color: '#F1F5F9',
    fontSize: 16,
  },
  textValid: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#10B981',
  },
  textInvalid: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#EF4444',
  },
});

export default styles;