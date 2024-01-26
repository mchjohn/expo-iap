import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import {
  endConnection,
  initConnection,
  flushFailedPurchasesCachedAsPendingAndroid,
} from 'react-native-iap';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Navigation } from './src/navigation';

export default function App() {
  useEffect(() => {
    const init = async () => {
      try {
        await initConnection();

        if (Platform.OS === 'android') {
          flushFailedPurchasesCachedAsPendingAndroid();
        }
      } catch (error: any) {
        console.error('Error occurred during initialization', error.message);
      }
    };

    init();

    return () => {
      endConnection();
    };
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
