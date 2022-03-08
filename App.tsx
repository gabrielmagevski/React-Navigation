import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route } from './src/routes/index';


export default function App() {
  return (
    <Route />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
