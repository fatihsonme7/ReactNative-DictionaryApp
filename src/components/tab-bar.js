import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {Search, Bookmark, RotateCcw} from './icons';

function TabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return label === 'Search' ? (
          <View key={label} style={styles.bottom}>
            <TouchableOpacity style={styles.buttonSearch} onPress={onPress}>
              <Search style={styles.icons} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            {label === 'History' && (
              <RotateCcw style={isFocused ? styles.icons2 : styles.icons3} />
            )}
            {label === 'Favorite' && (
              <Bookmark style={isFocused ? styles.icons2 : styles.icons3} />
            )}
            {isFocused && <View style={styles.box} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    padding: 15,
    marginTop: -15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    flexDirection: 'column',
    backgroundColor: '#E11E3C',
    borderRadius: 30,
  },
  icons: {
    color: '#fff',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    flexDirection: 'column',
    position: 'relative',
  },
  icons2: {
    color: '#E11E3C',
  },
  icons3: {
    color: '#758291',
  },
  box: {
    backgroundColor: '#E11E3C',
    width: 3,
    height: 3,
    borderRadius: 30,
    marginTop: 3,
  },
});

export default TabBar;
