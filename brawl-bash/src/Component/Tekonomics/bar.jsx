import React from 'react'

const Bar = () => {
  return (
    <div style={{display:"flex",flexDirection:"row",marginTop:40}}>
    <div className='brawlText'>
    Lorem ipsum
    </div>
    <div style={{width:"60%",justifyContent:"center",display:"flex"}}>
      <div style={{width:"80%",justifyContent:"center",display:"flex"}}>
        <div className='bar'>
        </div>
        <div style={{width:"30%",borderRadius:"0px 50px 50px 0px",backgroundColor:"#000000",marginLeft:-10}}>
        </div>
        </div>
    </div>
  </div>
  )
}

export default Bar
