import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import {
  Product,
  getProducts,
  requestPurchase,
  finishTransaction,
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap';

import { BookCard } from '~/components/BookCard';
import { Button } from '~/components/Button';
import { productSkus } from '~/constants/products';
import { BookParamList } from '~/navigation/types/navigation';

export function Book() {
  const { params } = useRoute<BookParamList>();
  const { navigate } = useNavigation();

  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  const handlePurchase = async (productId: string) => {
    setPurchaseLoading(true);

    try {
      await requestPurchase({ skus: [productId] });
    } catch (error) {
      Alert.alert('Error occurred while making purchase');
    } finally {
      setPurchaseLoading(false);
    }
  };

  const notifySuccessfulPurchase = () => {
    Alert.alert('Success', 'Purchase successful', [
      {
        text: 'HomeStack',
        onPress: () => navigate('HomeStack'),
      },
    ]);
  };

  useEffect(() => {
    const purchaseUpdateSubscription = purchaseUpdatedListener(async (purchase) => {
      // lógica personalizada para lidar com a validação de recibo com nosso backend
      const receipt = purchase.transactionReceipt;

      if (receipt) {
        try {
          await finishTransaction({ purchase, isConsumable: false });
        } catch (error) {
          console.error('An error occurred while completing transaction', error);
        }

        notifySuccessfulPurchase();
      }
    });

    const purchaseErrorSubscription = purchaseErrorListener((error) =>
      console.error('Purchase error', error.message)
    );

    const fetchProducts = async () => {
      try {
        if (productSkus) {
          const result = await getProducts({ skus: productSkus });

          setProduct(result);
          setIsLoading(false);
        }
      } catch (error) {
        Alert.alert('Error fetching products');
      }
    };

    fetchProducts();

    return () => {
      purchaseUpdateSubscription.remove();
      purchaseErrorSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Tab</Text>

      <BookCard book={params.book} />

      <View style={styles.button}>
        <Button onPress={() => handlePurchase(params.book.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#000814',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 32,
  },
});
