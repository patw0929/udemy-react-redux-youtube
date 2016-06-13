import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDQTY5vI6NEjZJegr_pZwiTxiU9jXicN2w';
const DEFAULT_TERM = 'react.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: DEFAULT_TERM,
    };

    this.videoSearch(DEFAULT_TERM);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos,
        term,
      });
    });
  }

  onVideoSelect(selectedVideo) {
    this.setState({
      selectedVideo,
    });
  }

  render() {
    return (
      <div>
        <SearchBar term={this.state.term} onSearchTermChange={this.videoSearch.bind(this)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}
          onVideoSelect={this.onVideoSelect.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
