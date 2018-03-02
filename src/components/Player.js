import React from 'react';
import ReactHowler from 'react-howler';
import raf from 'raf';

export class Player extends React.Component {
  constructor(props) {
    super(props);

    this.sources = this.props.playlists.map(
      playlist => `/audio/${playlist.filename}`
    );
    
    this.state = {
      isPlaying: false,
      currentIndex: 0,
      loaded: false,
      seek: undefined,
      duration: undefined
    };
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.clearRAF();
  }

  handleToggle = () => {
    this.setState(() => ({ isPlaying: !this.state.isPlaying }));
    this.props.handlePlayButton();
  };

  handleOnLoad = () => {
    this.setState(() => ({
      loaded: true,
      duration: this.player.duration()
    }));
  };

  handleOnPlay = () => {
    this.renderSeekPos();
  };

  handleStop = () => {
    this.player.stop();
    this.setState(() => ({
      isPlaying: false
    }));
    this.renderSeekPos();
    this.props.handleStopButton();
  };

  handleNext = () => {
    this.clearRAF();
    if (this.state.currentIndex < this.sources.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
      this.props.handlePlayNext();
    }
  };

  handlePrev = () => {
    this.clearRAF();
    if (this.state.currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
      this.props.handlePlayPrev();
    }
  };

  handleAutoPlayNext = () => {
    this.clearRAF();
    
    if (this.state.currentIndex >= (this.sources.length - 1)) {
      this.handleStop();
    } else {
      this.setState(prevState => ({
        isPlaying: true,
        currentIndex: prevState.currentIndex + 1
      }));
      this.props.handlePlayNext();
    }  
  };

  playEachPrecept = playIndex => {
    this.clearRAF();   
    this.setState(() => ({
      isPlaying: true,
      currentIndex: playIndex
    }));
  };

  renderSeekPos = () => {
    this.setState(() => ({
      seek: this.player.seek()
    }));
    if (this.state.isPlaying) {
      this._raf = raf(this.renderSeekPos);
    }
  };

  clearRAF = () => {
    raf.cancel(this._raf);
  };

  formatTime = (secs) => {
    let minutes = Math.floor(secs / 60) || 0;
    let seconds = (secs - minutes * 60) || 0;
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`
  }

  render() {
    return (
      <div>
        <p>{this.state.loaded ? this.props.playlists[this.state.currentIndex].precept : 'Loading'}</p>
        <p>
          {'Status: '}
          {this.state.seek !== undefined ? this.formatTime(Math.round(this.state.seek)) : '0.00'}
          {' / '}
          {this.state.duration ? this.formatTime(Math.round(this.state.duration)) : '0.00'}
        </p>

        <ReactHowler
          src={[this.sources[this.state.currentIndex]]}
          playing={this.state.isPlaying}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={() => {
            this.handleAutoPlayNext();
          }}
          ref={ref => (this.player = ref)}
        />
        <button
          onClick={this.handlePrev}
          disabled={this.state.currentIndex <= 0}
        >
          Prve
        </button>
        <button onClick={this.handleToggle}>
          {this.state.isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={this.handleStop}>Stop</button>
        <button
          onClick={this.handleNext}
          disabled={this.state.currentIndex >= this.sources.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Player;
