import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { addPlaylist } from '../actions/playlists';

export class AddPlaylistPage extends React.Component {
  addPlaylist = playlist => {
    this.props.addPlaylist(playlist);
    this.props.history.push('/playlists');
  };
  render() {
    return (
      <div>
        <h1>เพิ่มรายการสวดมนต์</h1>
        <PlaylistForm onSubmit={this.addPlaylist} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPlaylist: playlist => dispatch(addPlaylist(playlist))
});

export default connect(undefined, mapDispatchToProps)(AddPlaylistPage);
