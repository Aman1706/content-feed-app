import {SEARCH_ARTICLES} from '../../constants/actionTypes';

export const searchArticle = searchValue => {
  return {type: SEARCH_ARTICLES, payload: searchValue};
};
