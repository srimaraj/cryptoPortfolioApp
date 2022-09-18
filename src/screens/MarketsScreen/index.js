import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import CoinListItems from './coinListItems';
import {SAMPLE_DATA} from '../../../assets/sample data/coinprices';
import {LoaderWithCoins} from '../Loader';

const MarketPage = ({navigation}) => {
  const [coinDataArray, setCoinDataArray] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const onRefresh = () => {
    setIsRefreshing(true);
    getCoinPricesList();
  };
  useEffect(() => {
    getCoinPricesList();
  }, []);

  const getCoinPricesList = () => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=true&price_change_percentage=24h',
    )
      .then(res =>
        res.json().then(res2 => {
          setCoinDataArray(res2);
          setIsRefreshing(false);
          setPageLoading(false);
        }),
      )
      .catch(err => {
        console.log('failed to fetch coin data', err);
        setIsRefreshing(false);
        setPageLoading(false);
      });
  };

  if (pageLoading) {
    return (
      <View>
        <LoaderWithCoins />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={coinDataArray}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        windowSize={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}
        removeClippedSubviews={false}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                fetch(
                  `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${item.symbol}&tsym=USD&limit=10`,
                ).then(res => res.json().then(res => console.log(res)));
              }}>
              <CoinListItems
                name={item.name}
                symbol={item.symbol}
                logoUrl={item.image}
                rank={item.market_cap_rank}
                current_price={item.current_price}
                change_percentage={item.price_change_percentage_24h}
              />
            </TouchableOpacity>
          </View>
        )}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        // ListHeaderComponent={
        //   <View>
        //     <Text style={styles.textHeading}>Markets</Text>
        //     <View style={styles.divider} />
        //   </View>
        // }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,

    marginHorizontal: 20,
  },
  textHeading: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginTop: 10,
  },
});

export default MarketPage;
