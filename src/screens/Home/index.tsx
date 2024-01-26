import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getAvailablePurchases } from 'react-native-iap';

import { BookCard } from '~/components/BookCard';
import { Loading } from '~/components/Loading';
import { productSkus } from '~/constants/products';
// import { IBook } from '~/interfaces';

export function Home() {
  // const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [purchasedProducts, setPurchasedProducts] = useState<any>();

  // const getBooks = async () => {
  //   setIsLoading(true);

  //   await sleep();

  //   await fetch('http://192.168.122.1:3000/books')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setBooks(json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getBooks();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);

      console.log('on useCallback');

      const getPurchase = async () => {
        console.log('on getPurchase');

        try {
          const result = await getAvailablePurchases();

          console.log('Hey', { result });

          if (productSkus) {
            const hasPurchased = result.find((product) => product.productId === productSkus![0]);

            setPurchasedProducts(hasPurchased);
          }
        } catch (error) {
          console.error('Error occurred while fetching purchases', error);
        } finally {
          setIsLoading(false);
        }
      };

      getPurchase();
    }, [])
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={purchasedProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookCard book={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      )}
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
});
