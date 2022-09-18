import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

// const returnLoader = () => {

// }

export const LoaderWithCoins = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.rippleContainer}>
        <LottieView
          source={{
            uri: 'https://assets2.lottiefiles.com/packages/lf20_niecbrti.json',
          }}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};
export const LoderWithRipples = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.rippleContainer}>
        <LottieView
          source={require('../../assets/LottieAnimations/rippleLoader.json')}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rippleContainer: {
    height: 250,
    width: 250,
  },
});
