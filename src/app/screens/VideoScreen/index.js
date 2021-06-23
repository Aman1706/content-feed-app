import React from 'react';
import {View, Text} from 'react-native';

import Video from 'react-native-video';

import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const VideoScreen = ({route, navigation}) => {
  const {contentId} = route.params;
  const {videos} = useSelector(state => state.videos);
  const video = videos.find(video => video.id === contentId);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.backIcon}
        color="white"
        size={35}
        onPress={() => navigation.goBack()}
        name="arrow-left-circle"
      />
      <Video
        controls={true}
        source={{
          uri: video?.video_link,
        }}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default VideoScreen;
