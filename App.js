import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HistoryView from './src/views/history';
import SearchView from './src/views/search';
import FavoriteView from './src/views/favorite';
import DetailView from './src/views/detail';
import TabBar from './src/components/tab-bar';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Left, More} from './src/components/icons';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={() => {
          return {headerMode: 'none', header: () => {}};
        }}
        component={SearchView}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({route, navigation}) => {
          return {
            title: 'Detail',
            headerStyle: {
              backgroundColor: '#F8F8F8',
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Left style={{color: '#0A151F'}} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <More style={{color: '#0A151F'}} />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          initialRouteName="Search"
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="History" component={HistoryView} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Favorite" component={FavoriteView} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 3,
  },
  headerStyle: {
    borderBottomWidth: 0,
  },
});

export default App;
