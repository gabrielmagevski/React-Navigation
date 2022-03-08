import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../screens/Home';
import { About } from '../../screens/About';
import { Contact } from '../../screens/Contact';

import { propsNavigationStack } from './Models';

export function Stack() {
  const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();
  
  return(
    <Navigator
      initialRouteName='Home'
      screenOptions={{headerShown: false}}
    >
      <Screen name="Home" component={Home} />
      <Screen name="About" component={About} />
      <Screen name="Contact" component={Contact} />
    </Navigator>
  )
}