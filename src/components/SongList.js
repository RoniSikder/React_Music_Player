import React, { useState } from 'react'
import { Controler } from './Controler';

export const SongList = ({song}) => {
    let pos={
        border:"2px solid black",
        borderRadius:"5px",
        marginTop:"10px",
        display:"flex",
        justifyContent:"space-between",
        fontSize:"30px"
    }
    let sung=null;
    let comp=0;
    // let [comp,setComp]=useState(0)
    let reada=(number)=>{
        if(sung!==null){
            sung.pause();
            sung=new Audio(song[number].path)
            sung.play()
            // setComp(number)
            comp=number;
        }
        else{
            sung=new Audio(song[number].path)
            sung.play()
            // setComp(number)
            comp=number;
        }
    }

  return (
      <>
      {song.map((Element,index)=>
      <div style={pos}>
            <span>{song[index].name}</span>
            <button onClick={()=>reada(index)} style={{border:"none",backgroundColor:"transparent"}}>Play</button>   
      </div>)}
      <Controler song={song} comp={comp} sung={sung}/>
      </> 
  )
}
