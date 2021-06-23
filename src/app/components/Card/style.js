import {StyleSheet} from 'react-native';

import {getHp, getWp} from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    height: getHp(300),
    width: '95%',
    flex: 1,
    marginVertical: getHp(15),
    marginHorizontal: getWp(10),
    overflow: 'hidden',
  },
  image: {
    position: 'relative',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textContainer: {
    position: 'absolute',
    top: getHp(30),
    left: getWp(20),
    right: getWp(20),
    bottom: 0,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  authorText: {
    marginTop: getHp(10),
    fontSize: 14,
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
  },
});
