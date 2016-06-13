export function retrieveVideos(videos = []) {
  return {
    type: 'RETRIEVE_VIDEOS',
    payload: videos,
  };
}

export function selectVideo(video) {
  return {
    type: 'VIDEO_SELECTED',
    payload: video,
  };
}

export function searchTerm(term) {
  return {
    type: 'SEARCH_TERM',
    payload: term,
  };
}
