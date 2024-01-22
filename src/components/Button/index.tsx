import { Button as RNButton } from 'react-native';

interface Props {
  onPress: () => void;
}

export function Button({ onPress }: Props) {
  const handleBuy = () => {
    onPress();
  };

  return <RNButton title="Comprar Livro" onPress={handleBuy} color="#d81159" />;
}
