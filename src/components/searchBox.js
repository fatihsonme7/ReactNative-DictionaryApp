import React, {useEffect, useRef, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
  Animated,
  Dimensions,
} from 'react-native';
import {Search} from './icons';

//Git'e gönder

const searchBox = ({}) => {
  const [value, setValue] = useState('');
  const animValue2 = useRef(new Animated.Value(350)).current;

  useEffect(() => {
    console.log(value);
  }, [value]);

  const widthAnimation = toValue => {
    Animated.timing(animValue2, {
      toValue: toValue,
    }).start();
  };

  return (
    <Animated.View style={{...styles.container, top: -24}}>
      <Animated.View style={{...styles.inputView, width: animValue2}}>
        <Search style={styles.search} />
        <TextInput
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
          clearButtonMode="always"
          style={styles.input}
          placeholder="Türkçe Sözlük'te Ara"
          onFocus={() => {
            // animation(Dimensions.get('window').height / 8);
            widthAnimation(275);
          }}
          onBlur={() => {
            // animation(Dimensions.get('window').height / 2.7);
            widthAnimation(350);
          }}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={() => Keyboard.dismiss()}
        style={styles.button}>
        <Text>Vazgeç</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#0A151F',
    marginLeft: 12,
    height: '100%',
    width: 350,
  },
  inputView: {
    marginHorizontal: 24,
    borderRadius: 8,
    width: 350,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: Dimensions.get('window').height / 2.7,
  },
  search: {
    color: '#758291',
    marginLeft: 12,
  },
  button: {
    height: 50,
    justifyContent: 'center',
  },
});

export default searchBox;
