import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removePlaylist } from '../actions/playlists';

export const PlaylistList = ({ id, name }) => (
  <div>
    <Link to={`/playlist/${id}`}>
      <h3>{name}</h3>
    </Link> 
  </div>
);

export default connect()(PlaylistList);