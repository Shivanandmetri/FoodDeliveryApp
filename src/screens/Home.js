import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dishes from './Dishes';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name === 'Food') {
            icon = focused
              ? require('../../assests/images/biryani.png')
              : require('../../assests/images/biryani.png');
            size = focused ? 30 : 20;
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('../../assests/images/profile.png')
              : require('../../assests/images/profile.png');
            size = focused ? 30 : 20;
          }
          // You can return any component that you like here!
          return (
            <Image
              source={icon}
              style={{height: size, width: size}}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Food"
        component={Dishes}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
