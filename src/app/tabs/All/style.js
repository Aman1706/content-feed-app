import {StyleSheet} from 'react-native';

import {getHp, getWp} from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  emptyContainer: {
    marginVertical: getHp(50),
    marginHorizontal: getWp(50),
  },
});
