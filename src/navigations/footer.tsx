import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  BottomTabBar,
} from 'react-navigation';

import {Fadein,Banner} from '../screens'
// TOP WINDOW

const routeConfig = {
  Fadein: {
    screen: Fadein,
    navigationOptions: () => ({
      title: 'Fadein'
    })
  },
  Banner: {
    screen: Banner,
    navigationOptions: () => ({
      title: 'Banner'
    })
  },
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
