import {StyleSheet} from 'react-native';

import {getHp, getWp} from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    marginVertical: getHp(10),
    marginHorizontal: getWp(10),
  },
  search: {
    backgroundColor: '#efefef',
  },
});
