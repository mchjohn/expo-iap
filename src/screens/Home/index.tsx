import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { BookCard } from '~/components/BookCard';
import { Loading } from '~/components/Loading';
import { IBook } from '~/interfaces';
import { sleep } from '~/utils/sleep';

export function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = async () => {
    setIsLoading(true);

    await sleep();

    await fetch('http://192.168.122.1:3000/books')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
