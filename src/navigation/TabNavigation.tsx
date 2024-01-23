import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigator } from './StackNavigation';
import { TabBarIcon, tabScreenOptions } from './styles/screenOptions';
import { RootTabParamList } from './types/navigation';

import { Paywall } from '~/screens/Paywall';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          title: 'Início',
          tabBarIcon: (props) => TabBarIcon({ ...props, name: 'home' }),
        }}
      />
      <Tab.Screen
        name="Paywall"
        component={Paywall}
        options={{
          title: 'Compras',
          tabBarIcon: (props) => TabBarIcon({ ...props, name: 'wall' }),
        }}
      />
    </Tab.Navigator>
  );
}
