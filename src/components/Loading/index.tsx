import { View, StyleSheet, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#edf2f4" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
