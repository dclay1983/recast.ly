import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'react',
      video: exampleVideoData[0],
      videos: exampleVideoData,
    };
    this.handleVideo = this.handleVideo.bind(this);
    this.handleVideos = this.handleVideos.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleVideo(currentVideo) {
    this.setState({video: currentVideo});
  }

  handleVideos(currentVideos) {
    this.setState({videos: currentVideos});
  }

  handleSearch() {
    //this.setState({query: query})
    var info = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'react'
    };
    this.props.search(info, (data) => {
      this.handleVideo(data.items[0]);
      this.handleVideos(data.items);
    });
  }

  componentDidMount() {
    console.log('sucess');
    this.interval = setInterval(this.handleSearch, 360000);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video = {this.state.video}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList selectVideo = {this.handleVideo} videos = {exampleVideoData}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

