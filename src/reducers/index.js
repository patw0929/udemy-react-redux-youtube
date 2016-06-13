import { combineReducers } from 'redux';
import VideosReducer from './reducer_retrieve_videos';
import ActiveVideoReducer from './reducer_active_video';
import SearchTermReducer from './reducer_search_term';

const rootReducer = combineReducers({
  videos: VideosReducer,
  selectedVideo: ActiveVideoReducer,
  term: SearchTermReducer,
});

export default rootReducer;
