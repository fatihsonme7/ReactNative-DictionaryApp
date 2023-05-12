import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

function FavoriteView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <View style={styles.view}>
      <Text>Favorite!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteView;
