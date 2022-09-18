import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const PortfolioScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.assetValueContainer}>
          <Text style={styles.smallTextOne}>Asset Value</Text>
          <Text style={styles.LargeTextOne}>Rs. 69,420</Text>
        </View>
        <View style={styles.pnlContainer}>
          <Text style={styles.smallTextTwo}>Invested</Text>
          <Text style={styles.smallTextTwo}>Rs. 4,420</Text>
          <Text style={styles.smallTextThree}>PnL: 70%</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

export default PortfolioScreen;
