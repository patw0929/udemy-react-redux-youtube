import React from 'react';
import { connect } from 'react-redux';
import { retrieveVideos, selectVideo } from '../actions/index';
import { bindActionCreators } from 'redux';
import YTSearch from 'youtube-api-search';
import VideoListItem from '../components/video_list_item';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.videoSearch(this.props.term);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.term !== this.props.term) {
      this.videoSearch(nextProps.term);
    }
  }

  videoSearch(term) {
    YTSearch({ key: this.props.apiKey, term }, (videos) => {
      this.props.retrieveVideos(videos);
      this.props.selectVideo(videos[0]);
    });
  }

  render() {
    const videoItems = this.props.videos && this.props.videos.map((video) => {
      return (
        <VideoListItem key={video.etag}
          video={video}
          onVideoSelect={this.props.selectVideo.bind(this, video)} />
      );
    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    videos: state.videos,
    term: state.term,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    retrieveVideos,
    selectVideo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
