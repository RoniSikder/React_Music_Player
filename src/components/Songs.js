import React from 'react'
import song0 from '../Songs/Let Me Love You.mp3'
import song1 from '../Songs/Shape of You.mp3'
import song2 from '../Songs/Coldplay.mp3'
import song3 from '../Songs/Lily.mp3'
import song4 from '../Songs/Diamond Heart.mp3'
import { SongList } from './SongList'


export const Songs = () => {
    let songList = [
        {name:"Let Me Love You", path:song0},
        {name:"Shape Of You",path:song1},
        {name:"Ignite",path:song2},
        {name:"Lily",path:song3},
        {name:"Diamond Hearts",path:song4}
    ]
  return (
    <>
      <SongList song={songList}/>
    </>
  )
}
