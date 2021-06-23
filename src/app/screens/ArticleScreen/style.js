import {StyleSheet} from 'react-native';
import {getHp, getWp} from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  backIcon: {
    marginHorizontal: getWp(20),
    marginVertical: getHp(60),
  },
  image: {
    width: '100%',
    height: getHp(400),
    opacity: 10,
  },
  imageContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: getHp(400),
  },
  textContainer: {
    position: 'absolute',
    top: getHp(200),
    left: getWp(20),
    right: getWp(30),
    bottom: 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  authorText: {
    marginTop: getHp(10),
    fontSize: 14,
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
  },
  descriptionText: {
    marginTop: getHp(50),
    marginHorizontal: getWp(20),
    fontSize: 16,
  },
});
