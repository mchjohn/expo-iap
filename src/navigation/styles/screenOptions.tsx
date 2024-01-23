import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

type TabBarIconProps = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  size: number;
  color: string;
  focused: boolean;
};

export const TabBarIcon = (props: TabBarIconProps) => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size}
      color={props.focused ? '#edf2f4' : 'rgba(0, 8, 20, 0.7)'}
    />
  );
};

export const tabBarStyle = {
  gap: 4,
  height: 60,
  marginBottom: 28,
  borderRadius: 10,
  marginHorizontal: 16,
  backgroundColor: '#d81159',
};

export const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarLabel({ focused, children }) {
    return <Text style={{ color: focused ? '#edf2f4' : 'rgba(0, 8, 20, 0.7)' }}>{children}</Text>;
  },
  tabBarStyle,
};
