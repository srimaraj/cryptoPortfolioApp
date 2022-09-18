import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const PortfolioAssetDetailsScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Markets');
        }}>
        <View>
          <Text>invested:0000</Text>
          <Text>now:11000</Text>
          <Text>pnl:0000</Text>
          <Text>add transaction</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PortfolioAssetDetailsScreen;
