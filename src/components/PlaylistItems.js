import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PlaylistItem from './PlaylistItem';
import Lyrics from './Lyrics';
import Player from './Player';
import { removePlaylist } from '../actions/playlists';

export class PlaylistItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playingImg: false,
      index: 0
    }

    this.transPrayerList = this.props.playlist.lists.map(list =>
      this.props.transPrayers.find(trans => list === trans.precept)
    );
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
  handlePlayButton = () => {
    this.setState(() => ({
      playingImg: true
    }))
  }
  handleStopButton = () => {
    this.setState(() => ({
      playingImg: false
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
          this.state.playingImg && (
            <Lyrics
              index={this.state.index}
              transPrayers={this.transPrayerList}
            />
          )
        }
        <div>
          <h1>{this.props.playlist.name}</h1>
          <Link to={`/edit/${this.props.playlist.id}`}>
            <button>
              แก้ไข
            </button>  
          </Link>
          <button onClick={() => {
            this.props.dispatch(removePlaylist({ id: this.props.playlist.id }));
            this.props.history.push('/playlists')
          }}>
            ลบ
          </button>
        </div>
        {this.props.playlist.lists.map((list, index) => (
          <div key={index}>
            <PlaylistItem
              transPrayerList={this.props.transPrayers.find(
                trans => list === trans.precept
              )}
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
          playlists={this.transPrayerList}
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

const mapStateToProps = (state, props) => {
  return {
    transPrayers: state.transPrayers,
    playlist: state.playlists.find(
      playlist => playlist.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(PlaylistItems);
