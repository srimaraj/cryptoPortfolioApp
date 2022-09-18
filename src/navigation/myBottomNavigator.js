import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {
  DarkTheme,
  LightTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomeScreen';
import MarketPage from '../screens/MarketsScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MarketStackNavigator from './myStackNavigator';
import ThemeContext from '../../config/themeContext';
// import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const MyBottomTabNavigator = () => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={theme.backgroundColor === 'black' ? DarkTheme : LightTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          // options={{
          //   tabBarIcon: () => <Icon name="rocket" size={30} />,
          // }}
        />
        <Tab.Screen name="Markets" component={MarketStackNavigator} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyBottomTabNavigator;
