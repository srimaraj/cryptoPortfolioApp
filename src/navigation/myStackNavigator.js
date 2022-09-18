import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketPage from '../screens/MarketsScreen';
import PortfolioAssetDetailsScreen from '../screens/PortfolioAssetDetailsScreen';

const Stack = createNativeStackNavigator();

const MarketStackNavigator = () => {
  return (
    //    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Markets"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Markets" component={MarketPage} />
      <Stack.Screen
        name="CoinDetails"
        component={PortfolioAssetDetailsScreen}
      />
    </Stack.Navigator>
    //    </NavigationContainer>
  );
};

export default MarketStackNavigator;
