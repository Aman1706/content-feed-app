import {SEARCH_VIDEOS} from '../../constants/actionTypes';

export const searchVideo = searchValue => {
  return {type: SEARCH_VIDEOS, payload: searchValue};
};
