import React from 'react'
import "./reward.css"
import Bounce from 'react-reveal/Bounce';

const Reward = () => {
  return (
    <div style={{paddingTop:"200px"}}>
        <div className='center'>
            <div className='space'>
                <Bounce left>
                <div className='button'>
                <Bounce delay={500} left>
                GOVERNACE
                </Bounce>
                </div>
                </Bounce>
                <Bounce right>
                <div className='button1'>
                    <Bounce delay={500} right>
                    ABC
                    </Bounce>
                </div>
                </Bounce>
            </div>
        </div>
        <div className='center'>
        <div className='hexagon'>
            <div className='reward'>
            <Bounce delay={500} left>
            PZE REWARDS
            </Bounce>
            </div>
        </div>
        </div>
        <div className='center'>
            <div className='space'>
            <Bounce left>
                <div className='button2'>
                    <Bounce delay={500} left>
                    XYZ
                    </Bounce>
                </div>
                </Bounce>
                <Bounce right>
                <div className='button3'>
                    <Bounce delay={500} right>
                    STAKING
                    </Bounce>
                </div>
                </Bounce>
            </div>
        </div>
    </div>
  )
}

export default Reward
