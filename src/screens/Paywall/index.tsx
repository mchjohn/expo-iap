import { StyleSheet, Text, View } from 'react-native';

export function Paywall() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em breve... 🔜</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
