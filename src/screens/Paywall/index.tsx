import { StyleSheet, Text, View } from 'react-native';

export function Paywall() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paywall Tab</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: 'gray',
    height: 1,
    marginVertical: 30,
    opacity: 0.25,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
