import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';

import {useSelector} from 'react-redux';

import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const ArticleScreen = ({route, navigation}) => {
  const {contentId} = route.params;
  const {articles} = useSelector(state => state.articles);
  const article = articles.find(article => article.id === contentId);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{uri: article?.thumbnail}}>
        <View style={styles.imageContainer}>
          <Icon
            style={styles.backIcon}
            color="white"
            size={35}
            onPress={() => navigation.goBack()}
            name="arrow-left-circle"
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{article?.title}</Text>
            <Text style={{...styles.text, ...styles.authorText}}>
              By <Text style={styles.redText}>{article?.author?.name}</Text>{' '}
              {dayjs(article.published_date).format('MMM D, YYYY, h:mm A')}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <Text style={styles.descriptionText}>{article?.description}</Text>
      </ScrollView>
    </View>
  );
};

export default ArticleScreen;
