import React, { useState } from 'react'
import { Songs } from './Songs';

export const SongList = () => {
    let pos={
        border:"2px solid black",
        borderRadius:"5px",
        marginTop:"10px",
        display:"flex",
        justifyContent:"space-between",
        fontSize:"30px"
    }
    // let [decide,setdic]=useState(false);
    let reada=(number)=>{
        // e.preventDefault();
        // setdic(true);
        setNumber(number);

        console.log(holder);
    }
    let [holder,setNumber]=useState(0);
  return (
      <>
    <div className="container">
        <div className='songs' style={pos}>
            <span>Let Me Love You</span>
            <button onClick={()=>reada(0)} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Shape of You</span>
            <button onClick={()=>reada(1)} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Ignite</span>
            <button onClick={()=>reada(2)} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Lily</span>
            <button onClick={()=>reada(3)} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Diamond Hearts</span>
            <button onClick={()=>reada(4)} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
    </div>
    <Songs propa={holder} />
    </>
  )
}
