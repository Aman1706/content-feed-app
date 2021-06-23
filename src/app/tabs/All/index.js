import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getContents, searchContent} from '../../redux/actions/contents';

import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';

import styles from './style';

const All = ({navigation}) => {
  const {searchContents, isLoading} = useSelector(state => state.contents);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  const handleSearch = text => {
    setSearch(text);
    dispatch(searchContent(text));
  };

  return isLoading ? (
    <View style={styles.emptyContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <SearchInput value={search} handleSearch={handleSearch} />
      {!searchContents.length && !isLoading ? (
        <Text style={styles.emptyContainer}>No Content availaible</Text>
      ) : (
        <FlatList
          data={searchContents}
          renderItem={item => (
            <Card content={item.item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default All;
