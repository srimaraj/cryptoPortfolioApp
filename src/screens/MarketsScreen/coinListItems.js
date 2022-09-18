import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ThemeContext from '../../../config/themeContext';

const CoinListItems = ({
  name,
  symbol,
  logoUrl,
  rank,
  current_price,
  change_percentage,
}) => {
  let changeColor = change_percentage > 0 ? 'green' : 'red';
  let iconName = change_percentage > 0 ? 'caretup' : 'caretdown';
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <Image
          source={{
            uri: `${logoUrl}`,
          }}
          style={{
            width: 32,
            height: 32,
            resizeMode: 'center',
            borderRadius: 16,
          }}
        />

        <View style={styles.leftTitle}>
          <Text style={(styles.coinFullName, {color: theme.textColor1})}>
            {name}
          </Text>
          <Text style={(styles.coinSymbol, {color: theme.textColor1})}>
            {symbol.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.rightWrapper}>
        <Text style={(styles.coinPrice, {color: theme.textColor1})}>
          ₹ {current_price}
        </Text>
        <View style={styles.priceChangeRow}>
          <Text style={[styles.changeRate, {color: changeColor}]}>
            {Math.abs(change_percentage.toFixed(2))}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  leftTitle: {
    marginLeft: 20,
  },
  coinFullName: {
    fontSize: 14,
    marginBottom: 6,
  },
  coinSymbol: {
    fontSize: 15,
    fontWeight: '500',
    color: '#464646',
  },
  rightWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 12,
  },
  coinPrice: {fontSize: 16, fontWeight: '500', marginBottom: 4},
  changeRate: {
    fontSize: 12,
    fontWeight: '600',
  },
  priceChangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CoinListItems;
