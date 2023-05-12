/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import {Logo} from '../components/icons';
import SearchBox from '../components/searchBox';
import bg from '../assets/bg.jpg';
import {useFocusEffect} from '@react-navigation/native';
import {
  CardContainer,
  CardSummary,
  CardTitle,
} from '../components/suggestionCard';

function SearchView({navigation}) {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [homeData, setHomeData] = useState([]);

  const animValue = useRef(new Animated.Value(0)).current;

  const animation = toValue => {
    Animated.timing(animValue, {
      toValue: toValue,
    }).start();
  };

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data.kelime);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardIsOpen(true);
      animation(125);
    });
    const hide = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardIsOpen(false);
      animation(0);
    });
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(keyboardIsOpen ? 'dark-content' : 'light-content');
    }, [keyboardIsOpen]),
  );

  const renderItem = ({item, index}) => {
    console.log(item);
    return (
      <CardContainer
        onPress={() => navigation.navigate('Detail', {keyword: item.madde})}>
        <CardTitle>{item.madde}</CardTitle>
        <CardSummary>{item.anlam}</CardSummary>
      </CardContainer>
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image style={styles.bg} source={bg} />
      {!keyboardIsOpen && (
        <View style={styles.logo}>
          <Logo color="#fff" />
        </View>
      )}
      <Animated.View style={{...styles.content, bottom: animValue}}>
        <SearchBox isFocused={keyboardIsOpen} />
        <FlatList
          style={{flex: 1, top: 48}}
          data={homeData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: Dimensions.get('window').height / 2.5,
    width: Dimensions.get('window').width,
  },
  view: {
    alignItems: 'center',
    backgroundColor: '#E11E3C',
  },
  logo: {
    position: 'absolute',
    top: Dimensions.get('window').height / 8,
    color: '#fff',
    alignSelf: 'center',
  },
  background: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    height: 500,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
});

export default SearchView;
