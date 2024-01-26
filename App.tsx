import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Navigation } from './src/navigation';

const REVENUECAT_ANDROID_API_KEY = 'goog_bjWDVqOtosnaezdZLFNMIdlMItN';

export default function App() {
  useEffect(() => {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

    if (Platform.OS === 'ios') {
      Purchases.configure({
        apiKey: 'API_KEY',
      });
    } else if (Platform.OS === 'android') {
      Purchases.configure({
        apiKey: REVENUECAT_ANDROID_API_KEY,
      });
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />

        <StatusBar backgroundColor="#000814" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
  },
});
