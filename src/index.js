import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { API_KEY } from './config/config';
import RootReducer from './reducers'
import SearchBar from './containers/search_bar';
import VideoList from './containers/video_list';
import VideoDetail from './containers/video_detail';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoList apiKey={API_KEY} />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object,
};

const store = createStore(RootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('.container'));
