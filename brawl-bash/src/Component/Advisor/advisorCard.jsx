import React from 'react'
import "./advisor.css"
import Bounce from 'react-reveal/Bounce';


const AdvisorCard = () => {
  return (
    <div className='mainDiv'>
        <div className='center'>
            <div className='advisorCard'>
                <img src="Group 769.svg" width="100%"/>
            </div>
        </div>
        <div className='center'>
            <div className='advisorBackground' style={{backgroundImage:"url(/textpage1.svg)"}}>
                <Bounce delay={500} left>
                <center>
                    <div className='cardHeading'>
                        Lorem Ipsum
                    </div>
                    <p className='cardText'>
                        dolor sit 
                    </p>
                    <p className='cardText'>
                        amet, consectetur 
                        adipiscing  elit.
                        Nam venenatis ultrices 
                        l bero, 
                    </p>
            </center>
            </Bounce>
        </div>
        </div>
    </div>
  )
}

export default AdvisorCard
