import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { IBook } from '~/interfaces';
import { formatPrice } from '~/utils/formatPrice';

interface Props {
  book: IBook;
}

export function BookCard({ book }: Props) {
  const { navigate } = useNavigation();

  const handleGoToBook = (item: IBook) => {
    navigate('Book', { book: item });
  };

  return (
    <TouchableOpacity style={styles.book} activeOpacity={0.8} onPress={() => handleGoToBook(book)}>
      <Image source={{ uri: book.image }} style={styles.image} />

      <View>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.price}>{formatPrice(book.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  book: {
    gap: 8,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  price: {
    color: '#edf2f4',
    fontSize: 16,
  },
  title: {
    color: '#edf2f4',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
