import {
  FETCH_CONTENTS,
  START_LOADING,
  END_LOADING,
  SEARCH_ARTICLES,
} from '../../constants/actionTypes';

const articleReducers = (
  state = {articles: [], isLoading: true, searchArticles: []},
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
        articles: action.payload.filter(content => content.type === 'article'),
        searchArticles: action.payload.filter(
          content => content.type === 'article',
        ),
      };
    case SEARCH_ARTICLES:
      return {
        ...state,
        searchArticles: state.articles.filter(article =>
          article.author.name
            .toLowerCase()
            .includes(action.payload.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};

export default articleReducers;
