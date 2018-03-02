import React from 'react';
import Lyric from './Lyric';

const Lyrics = (props) => (
  <div>
    {
      props.transPrayers.length === 0 ? (
        <p>ไม่มีบทสวด</p>
      ) : (
        props.transPrayers.filter((transPrayer, index) => 
          index  === props.index
        ).map((result, index) => 
          <Lyric
            key={index} 
            transPrayer={result}
          />
        )
      )
    }
  </div>
)

export default Lyrics;