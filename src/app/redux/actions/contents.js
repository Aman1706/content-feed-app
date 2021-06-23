import {
  FETCH_CONTENTS,
  START_LOADING,
  END_LOADING,
  SEARCH_CONTENTS,
} from '../../constants/actionTypes';

import * as api from '../../api/index';

export const getContents = () => async dispatch => {
  try {
    dispatch({type: START_LOADING});
    const {data} = await api.fetchContents;

    /*in the JSON data provided, 3 objects had the same ID(530906), 
    have added the line below to ensure all objects have unique IDs*/
    data.feed.map((d, i) => (d.id == '530906' ? (d.id += i) : d));

    dispatch({type: FETCH_CONTENTS, payload: data.feed});
    dispatch({type: END_LOADING});
  } catch (error) {
    console.log(error);
  }
};

export const searchContent = searchValue => {
  return {type: SEARCH_CONTENTS, payload: searchValue};
};
