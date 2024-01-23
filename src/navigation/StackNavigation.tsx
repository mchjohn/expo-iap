import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types/navigation';

import { Book } from '~/screens/Book';
import { Home } from '~/screens/Home';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Book" component={Book} />
    </HomeStack.Navigator>
  );
}
