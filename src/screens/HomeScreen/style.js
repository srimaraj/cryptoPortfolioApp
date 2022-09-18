import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ThemeContext from '../../../config/themeContext';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 8,
    backgroundColor: 'white',
    flex: 1,
  },
  newsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },

  newsTitleView: {
    flex: 1,
    paddingLeft: 12,
  },
  dateTimeText: {
    fontSize: 8,
    fontWeight: '500',
    color: 'black',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'black',
  },
  tagsContainer: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    boxShadow: 8,
    maxHeight: 30,
  },
  tagsText: {
    fontWeight: '700',
    fontSize: 10,
    color: 'black',
  },
});
export default styles;
