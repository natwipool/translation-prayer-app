import React from 'react';
import { connect } from 'react-redux';
import TransPrayerListItem from './TransPrayerListItem';
import Lyrics from './Lyrics';
import Player from './Player';

export class TransPrayerLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playingImg: false,
      index: 0
    }
  }
  handlePlayNext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1
    }))
  }
  handlePlayPrev = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1
    }))
  }
  handleStopButton = () => {
    this.setState(() => ({
      playingImg: false
    }))
  }
  handlePlayButton = () => {
    this.setState(() => ({
      playingImg: true
    }))
  }
  onPlayEachPrecept = playIndex => {
    this.child.playEachPrecept(playIndex);
    this.setState(() => ({
      playingImg: true,
      index: playIndex
    }))
  };
  render() {
    return (
      <div>
        {
          this.state.playingImg &&
          <Lyrics
            index={this.state.index}
            transPrayers={this.props.transPrayers}
          />
        }
        <h1>สารบัญบทสวดมนต์</h1>
        {this.props.transPrayers.map((transPrayer, index) => (
          <div key={index}>
            <TransPrayerListItem 
              {...transPrayer}
            />
            <button
              onClick={e => {
                this.onPlayEachPrecept(index);
              }}
            >
              {this.state.playingImg && this.state.index === index ? 'PLAYING' : 'PLAY'}
            </button>
          </div>
        ))}
        
        <Player
          playlists={this.props.transPrayers}
          handlePlayNext={this.handlePlayNext}
          handlePlayPrev={this.handlePlayPrev}
          handlePlayButton={this.handlePlayButton}
          handleStopButton={this.handleStopButton}
          onRef={ref => (this.child = ref)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transPrayers: state.transPrayers
  };
};

export default connect(mapStateToProps)(TransPrayerLists);