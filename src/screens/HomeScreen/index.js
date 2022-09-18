import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  Linking,
} from 'react-native';
import styles from './style';
import moment from 'moment';
import SizedBox from '../../components/sizedBox';
import ThemeContext from '../../../config/themeContext';
import {LoderWithRipples} from '../Loader';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const theme = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    getCryptoNewsData();
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    getCryptoNewsData();
  };
  const getCryptoNewsData = () => {
    fetch(
      'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={44f8d5f4db98f812070cfddf08b30ea4805b363998e20462cdd4825e1036051a}',
    )
      .then(res => res.json())
      .then(res => {
        setNews(res.Data);
        setIsRefreshing(false);
        setPageLoading(false);
      })
      .catch(err => {
        console.log('fetch error', err);
        setIsRefreshing(false);
        setPageLoading(false);
      });
  };
  if (pageLoading) {
    return (
      <View>
        <LoderWithRipples />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: theme.backgroundColor}]}>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              Linking.openURL(item.url).catch(err => {
                console.err('Could not open Url because', err);
              });
            }}>
            <View style={styles.newsContainer}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                source={{
                  uri: item.imageurl,
                }}
                resizeMode="contain"
              />
              <View style={styles.newsTitleView}>
                <Text style={[styles.dateTimeText, {color: theme.textColor1}]}>
                  {moment.unix(item.published_on).format('hh:mm A. DD/MM/YYYY')}
                </Text>
                <SizedBox height={4} />
                <Text
                  numberOfLines={3}
                  style={[styles.titleText, {color: theme.textColor1}]}>
                  {item.title}
                </Text>
                <SizedBox height={8} />
                <FlatList
                  data={item.categories.split('|').slice(0, 4)}
                  horizontal={true}
                  renderItem={({item, index}) => (
                    <View key={index} style={styles.tagsContainer}>
                      <Text style={styles.tagsText}>{item}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </SafeAreaView>
  );
};

export default HomePage;
