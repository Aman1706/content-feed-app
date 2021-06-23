import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import All from './src/app/tabs/All/index';
import Articles from './src/app/tabs/Articles/index';
import Videos from './src/app/tabs/Videos/index';
import ArticleScreen from './src/app/screens/ArticleScreen/index';
import VideoScreen from './src/app/screens/VideoScreen/index';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  createTopTabs = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: '#a201ff'},
          activeTintColor: '#fff',
          inactiveTintColor: '#000',
          indicatorStyle: {backgroundColor: '#fff'},
          showLabel: false,
          showIcon: true,
          headerTitle: 'TEST',
        }}>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={25} name="trending-up" />
            ),
          }}
        />
        <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={25} name="newspaper-variant" />
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={25} name="movie" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Content Feed"
          component={createTopTabs}
          options={{
            headerStyle: {
              backgroundColor: '#a201ff',
              shadowColor: 'transparent',
            },
            headerTitleAlign: 'left',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
