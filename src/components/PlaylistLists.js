import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PlaylistList from './PlaylistList';

export const PlaylistLists = (props) => (
  <div>
    <h1>รายการบทสวดมนต์</h1>
    <Link to="/create">สร้างรายการสวดมนต์</Link>
    {
      props.playlists.length === 0 ? (
        <p>ไม่มีรายการสวดมนต์</p>
      ) : (
        props.playlists.map((playlist) => (
          <PlaylistList 
            key={playlist.id}
            {...playlist}
          /> 
        ))
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps)(PlaylistLists);

