import React from 'react';
import { Font, Expo } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Title from './Components/Textcomponents/Title';
import Header from './Components/Header/Header';
import Today from './Components/TodayScreen/Today';
import Graphs from './Components/GraphsScreen/Graphs';

export default TabNavigator(

{
  TODAY :{ screen: Today },
  GRAPHS: { screen: Graphs}
},
{
 tabBarOptions: {
   activeTintColor: '#FFF',
   inactiveBackgroundColor: "#0097A7",
   activeBackgroundColor: "#FFC107",
   inactiveTintColor: '#FFF',
   scrollEnabled: true,
   labelStyle: {
     marginBottom: 10,
     fontSize: 20,
     fontFamily: 'Verdana',
   }
 },
 tabBarPosition: 'bottom',
 swipeEnabled: true,
 lazy: false,
 animationEnabled: true,
}


);
