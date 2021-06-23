import {StyleSheet} from 'react-native';

import {getHp, getWp} from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
  },
  backIcon: {
    marginHorizontal: getWp(20),
    marginVertical: getHp(60),
  },
  backgroundVideo: {
    position: 'absolute',
    top: '30%',
    left: 0,
    bottom: '30%',
    right: 0,
  },
});
