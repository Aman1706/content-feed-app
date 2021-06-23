import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getContents} from '../../redux/actions/contents';
import {searchArticle} from '../../redux/actions/articles';

import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';

import styles from './style';

const Articles = ({navigation}) => {
  const {searchArticles, isLoading} = useSelector(state => state.articles);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  const handleSearch = text => {
    setSearch(text);
    dispatch(searchArticle(text));
  };

  return isLoading ? (
    <View style={styles.emptyContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <SearchInput value={search} handleSearch={handleSearch} />
      {!searchArticles.length && !isLoading ? (
        <Text style={styles.emptyContainer}>No Articles available</Text>
      ) : (
        <FlatList
          data={searchArticles}
          renderItem={item => (
            <Card content={item.item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default Articles;
