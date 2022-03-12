import React from 'react'
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
    let assign=0;
  return (
      <>
    <div className="container">
        <div className='songs' style={pos}>
            <span>Let Me Love You</span>
            <button onClick={assign=0} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Shape of You</span>
            <button onClick={assign=1} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Ignite</span>
            <button onClick={assign=2} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Lily</span>
            <button onClick={assign=3} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Diamond Hearts</span>
            <button onClick={assign=4} style={{border:"none",backgroundColor:"transparent"}}>Play</button>    
        </div>
    </div>
    <Songs/>
    </>
  )
}
