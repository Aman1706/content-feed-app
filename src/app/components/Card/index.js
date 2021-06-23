import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import dayjs from 'dayjs';

import styles from './style';

const Card = ({content, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        content.type === 'article'
          ? navigation.navigate('Article', {contentId: content.id})
          : navigation.navigate('Video', {contentId: content.id})
      }>
      <Image
        style={styles.image}
        source={{
          uri: content?.thumbnail,
        }}
      />
      <View style={styles.imageContainer}></View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{content?.title}</Text>
        <Text style={{...styles.text, ...styles.authorText}}>
          By <Text style={styles.redText}>{content?.author?.name}</Text>{' '}
          {dayjs(content.published_date).format('MMM D, YYYY, h:mm A')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
