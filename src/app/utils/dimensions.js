import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const height = 927;
const width = 360;

/*getHp and getWp is being used so styling in the app 
 can be responsive to different mobile dimensions*/

export const getHp = (pixels = height) => {
  return hp(((pixels / height) * 100).toFixed(2));
};

export const getWp = (pixels = width) => {
  return wp(((pixels / width) * 100).toFixed(2));
};
