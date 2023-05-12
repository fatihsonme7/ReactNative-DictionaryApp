import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function CardContainer({children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      {children}
    </TouchableOpacity>
  );
}

export function CardTitle({children}) {
  return (
    <View>
      <Text style={styles.textTitle}>{children}</Text>
    </View>
  );
}

export function CardSummary({children}) {
  return (
    <View>
      <Text style={styles.textContent}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textContent: {
    top: 5,
    fontSize: 13,
  },
});
