import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getContents} from '../../redux/actions/contents';
import {searchVideo} from '../../redux/actions/videos';

import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';

import styles from './style';

const Videos = ({navigation}) => {
  const {searchVideos, isLoading} = useSelector(state => state.videos);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  const handleSearch = text => {
    setSearch(text);
    dispatch(searchVideo(text));
  };

  return isLoading ? (
    <View style={styles.emptyContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <SearchInput value={search} handleSearch={handleSearch} />
      {!searchVideos.length && !isLoading ? (
        <Text style={styles.emptyContainer}>No Videos available</Text>
      ) : (
        <FlatList
          data={searchVideos}
          renderItem={item => (
            <Card content={item.item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default Videos;
