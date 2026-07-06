import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1E2035',
    borderRadius: 50,
    padding: 5,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: 50,
  },

  activeTab: {
    backgroundColor: '#4B7BFF',
  },

  text: {
    color: '#9B9BB5',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  activeText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default styles;
