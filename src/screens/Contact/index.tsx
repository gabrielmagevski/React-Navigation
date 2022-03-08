import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { styles } from '../About/styles';

export function Contact() {
  const navigation = useNavigation<propsStack>();
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Página: Contact</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
      <Text style={styles.titleButton}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.titleButton}>About</Text>
      </TouchableOpacity>
    </View>
  )
}