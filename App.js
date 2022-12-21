import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/pages/Home';

export default function orgsHooks() {
  return (
    <SafeAreaView style={styles.tela}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1
  }
})