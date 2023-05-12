import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

function ActionButton({children, ...props}) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {children}
    </TouchableOpacity>
  );
}

export function ActionButtonTitle({children, ...props}) {
  return (
    <Text style={{color: '#758291'}} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ActionButton;
