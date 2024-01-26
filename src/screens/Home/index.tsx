import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Purchases from 'react-native-purchases';

import { BookCard } from '~/components/BookCard';
import { Loading } from '~/components/Loading';
import { productSkus } from '~/constants/products';
import { IBook } from '~/interfaces';

export function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = async () => {
    setIsLoading(true);

    try {
      // const products = await Purchases.getProducts(productSkus as string[]);
      const offerings = await Purchases.getOfferings();

      if (offerings && offerings.current) {
        const { current } = offerings;
        const { monthly } = current;

        if (monthly) {
          const { product } = monthly;
          const { identifier } = product;

          console.debug('Current product: ', product);
          console.debug('Current identifier: ', identifier);
        }
      }
    } catch (e) {
      console.log('Deu ruim... ', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={books}
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
