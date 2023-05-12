import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <View style={styles.view}>
      <Text>History!</Text>
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

export default HistoryView;
