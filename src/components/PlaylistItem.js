import React from 'react';

const PlaylistItem = (props) => (
  <div>
    <h3>{props.transPrayerList.precept}</h3>
    <p>{props.transPrayerList.category}</p>
  </div>
);

export default PlaylistItem;