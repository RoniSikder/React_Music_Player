import React from 'react'

export const Songs = ({propa}) => {
    let songList = [
        {name: "Let Me Love You", path:"../Songs/Let Me Love You.mp3"},
        {name:"Shape Of You",path:"../Songs/Shape of You.mp3"},
        {name:"Ignite",path:"../Songs/Coldplay.mp3"},
        {name:"Lily",path:"../Songs/Lily.mp3"},
        {name:"Diamond Hearts",path:"../Songs/Diamond Heart.mp3"}
    ]
    console.log(songList[propa].name);
    let song=new Audio(songList[propa].path)
    song.play();
    
  return (
    <>

    </>
  )
}
