import React from 'react'

export const SongList = () => {
    let pos={
        border:"2px solid black",
        borderRadius:"5px",
        marginTop:"10px",
        display:"flex",
        justifyContent:"space-between",
        fontSize:"30px"
    }
  return (
    <div className="container">
        <div className='songs' style={pos}>
            <span>Let Me Love You</span>
            <button>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Shape of You</span>
            <button>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Ignite</span>
            <button>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Lily</span>
            <button>Play</button>    
        </div>
        <div className='songs' style={pos}>
            <span>Diamond Hearts</span>
            <button>Play</button>    
        </div>    
    </div>
  )
}
