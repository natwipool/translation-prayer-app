import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { editPlaylist } from '../actions/playlists';

export class EditPlaylistPage extends React.Component {
  onSubmit = playlist => {
    this.props.editPlaylist(this.props.playlist.id, playlist);
    this.props.history.push(`/playlist/${this.props.playlist.id}`);
  };

  render() {
    return (
      <div>
        <PlaylistForm
          playlist={this.props.playlist}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  playlist: state.playlists.find(
    playlist => playlist.id === props.match.params.id
  )
});

const mapDispatchToProps = dispatch => ({
  editPlaylist: (id, playlist) => dispatch(editPlaylist(id, playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylistPage);
