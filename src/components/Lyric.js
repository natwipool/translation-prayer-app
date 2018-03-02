import React from 'react';
import EachLyric from './EachLyric';

const Lyric = (props) => {
  return (
    <div>
      <h3>{props.transPrayer.precept}</h3>
      {props.transPrayer.lyrics.map((lyric, index) => 
        <EachLyric 
          key={index}
          lyric={lyric}
        />
      )}
    </div>
  )
}

export default Lyric;