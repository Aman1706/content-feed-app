import React from 'react';

import {Platform, View} from 'react-native';

import {SearchBar} from 'react-native-elements';

import styles from './style';

const SearchInput = ({value, handleSearch}) => {
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.search}
        platform={Platform.OS}
        placeholder="Search By Author Name"
        value={value}
        onChangeText={text => handleSearch(text)}
      />
    </View>
  );
};

export default SearchInput;
