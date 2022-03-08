import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

import { styles } from './styles';

export function Home() {
  const navigation = useNavigation<propsStack>();
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Página: Home</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}
      >
       <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  )
}