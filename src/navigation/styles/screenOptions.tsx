import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

type TabBarIconProps = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  size: number;
  color: string;
  focused: boolean;
}

export const TabBarIcon = (props: TabBarIconProps) => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size}
      color={props.focused ? '#EFF3F3' : '#495951'}
    />
  )
}

export const tabBarStyle = {
  gap: 4,
  height: 60,
  marginBottom: 28,
  borderRadius: 10,
  marginHorizontal: 16,
  backgroundColor: '#091F1B',
}

export const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarLabel({ focused, children }) {
    return (
      <Text style={{color: focused ? '#EFF3F3' : '#495951'}}>
        {children}
      </Text>
    )
  },
  tabBarStyle,
}

