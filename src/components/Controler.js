import React from 'react'

export const Controler = ({song,comp,sung}) => {
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
  let prv=()=>{

  }
   
  let papos=()=>{
    if(sung.played){
      console.log(sung.value)
      // sung.pause();
    }
    else{
      console.log(sung.value)
      // sung.play();
    }
  }

  let aft=()=>{
    
  }

  return (
    <div className="controler" style={pos}>
        <input type="range"  id="pogBar" min={0} value={0} max={100} style={{width:"100%",backgroundColor:"green"}}/>
        <div className="butt" style={pos1} >
          <button onClick={()=>prv()} style={{height:"50px",width:"90px",borderRadius:"5px"}}>Previous</button>
          <button onClick={()=>papos()} style={{height:"50px",width:"90px",borderRadius:"5px"}}>Play/Pause</button>
          <button onClick={()=>aft()} style={{height:"50px",width:"90px",borderRadius:"5px"}}>Next</button>
        </div>    
    </div>
  )
}
