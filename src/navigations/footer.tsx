import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  BottomTabBar,
} from 'react-navigation';

import {Fadein} from '../screens'
// TOP WINDOW

const routeConfig = {

  Fadein: {
    screen: Fadein,
    navigationOptions: () => ({
      title: 'Fadein'
    })
  }
};

export const FooterNavigator = createAppContainer(
  createBottomTabNavigator(routeConfig, {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    tabBarPosition: 'bottom',
    tabBarComponent: BottomTabBar
    // animationEnabled: false,
    // swipeEnabled: false,
  })
);
