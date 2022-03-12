import React from 'react'

export const Controler = () => {
  let pos={
    position:"absolute",
    bottom:"0px",
    width:"100%",
    // border:"2px solid black"
  }
  let pos1={
    display:"flex",
    justifyContent:"space-Evenly",
    alignItem:"center"
  }
  return (
    <div className="controler" style={pos}>
        <input type="range"  id="pogBar" min={0} value={0} max={100} style={{width:"100%",backgroundColor:"green"}}/>
        <div className="butt" style={pos1} >
          <button style={{height:"50px",width:"90px",borderRadius:"5px"}}>Previous</button>
          <button style={{height:"50px",width:"90px",borderRadius:"5px"}}>Play/Pause</button>
          <button style={{height:"50px",width:"90px",borderRadius:"5px"}}>Next</button>
        </div>    
    </div>
  )
}
