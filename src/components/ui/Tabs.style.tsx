import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 4,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },

  activeTab: {
    backgroundColor: '#4B7BFF',
  },

  text: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },

  activeText: {
    color: '#FFF',
    fontWeight: '700',
  },
});

export default styles;