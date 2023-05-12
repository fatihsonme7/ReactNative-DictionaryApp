import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function DetailSummaryItemContainer({children, ...props}) {
  return (
    <View {...props}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>•</Text>
        <Text style={{color: '#000000', marginTop: 5}}>{props.veri}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
}

export function DetailSummaryItemTitle({children, ...props}) {
  return (
    <View {...props}>
      <Text style={styles.text1}>{children}</Text>
    </View>
  );
}

export function DetailSummaryItemSummary({children, ...props}) {
  return (
    <View {...props}>
      <Text style={styles.text2}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    marginVertical: 10,
    marginRight: 35,
  },
  textTitle: {
    fontSize: 20,
    marginHorizontal: 10,
    color: '#758291',
  },
});
