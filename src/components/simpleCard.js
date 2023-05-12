import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SimpleCardContainer({children}) {
  return (
    <View style={styles.SimpleCardContainer}>
      <Text>{children}</Text>
    </View>
  );
}

export function SimpleCardTitle({children}) {
  return (
    <View>
      <Text style={styles.SimpleTextTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SimpleCardContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    height: 40,
    borderRadius: 20,
  },
  SimpleTextTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 12,
  },
});
