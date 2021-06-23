import {
  FETCH_CONTENTS,
  START_LOADING,
  END_LOADING,
  SEARCH_VIDEOS,
} from '../../constants/actionTypes';

const videoReducers = (
  state = {videos: [], isLoading: true, searchVideos: []},
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
        videos: action.payload.filter(content => content.type === 'video'),
        searchVideos: action.payload.filter(
          content => content.type === 'video',
        ),
      };
    case SEARCH_VIDEOS:
      return {
        ...state,
        searchVideos: state.videos.filter(video =>
          video.author.name
            .toLowerCase()
            .includes(action.payload.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};

export default videoReducers;
