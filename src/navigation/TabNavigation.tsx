import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarIcon, tabScreenOptions } from './styles/screenOptions';
import { RootTabParamList } from './types/navigation';

import { Book } from '~/screens/Book';
import { Home } from '~/screens/Home';
import { Paywall } from '~/screens/Paywall';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => TabBarIcon({ ...props, name: 'home' }),
        }}
      />
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarIcon: (props) => TabBarIcon({ ...props, name: 'book' }),
        }}
      />
      <Tab.Screen
        name="Paywall"
        component={Paywall}
        options={{
          tabBarIcon: (props) => TabBarIcon({ ...props, name: 'wall' }),
        }}
      />
    </Tab.Navigator>
  );
}
