import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { BookCard } from '~/components/BookCard';
import { Button } from '~/components/Button';
import { BookParamList } from '~/navigation/types/navigation';

export function Book() {
  const { params } = useRoute<BookParamList>();

  const onBuy = () => {
    console.log('Comprar livro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Tab</Text>

      <BookCard book={params.book} />

      <View style={styles.button}>
        <Button onPress={onBuy} />
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
