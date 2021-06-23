import {
  FETCH_CONTENTS,
  START_LOADING,
  END_LOADING,
  SEARCH_CONTENTS,
} from '../../constants/actionTypes';

const contentReducers = (
  state = {contents: [], isLoading: true, searchContents: []},
  action,
) => {
  switch (action.type) {
    case START_LOADING:
      return {...state, isLoading: true};
    case END_LOADING:
      return {...state, isLoading: false};
    case FETCH_CONTENTS:
      return {
        ...state,
        contents: action.payload,
        searchContents: action.payload,
      };
    case SEARCH_CONTENTS:
      return {
        ...state,
        searchContents: state.contents.filter(content =>
          content.author.name
            .toLowerCase()
            .includes(action.payload.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};

export default contentReducers;
