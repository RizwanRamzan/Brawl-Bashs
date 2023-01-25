import React from 'react'
import "./advisor.css"
import AdvisorCard from './advisorCard'
import SecondAdvisor from './secondAdvisor'
import { useMediaQuery } from 'react-responsive'
import Bounce from 'react-reveal/Bounce';


const Advisor = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <div id="advisors">
      <div className='center'>
        <div className='width'>
            <div className='center'>
                <div className='advisorButton'>
                    ADVISOR
                </div>
            </div>
            <div className='center'>
               {isTabletOrMobile ?
                <div className='mobileInnerWidth' >
                    <Bounce duration={2000}>
                    <div style={{display:"flex"}}>
                        <AdvisorCard/>
                        <AdvisorCard/>
                    </div>
                    <div style={{display:"flex"}}>
                        <AdvisorCard/>
                        <AdvisorCard/>
                    </div>
                    </Bounce>
                </div>
               :  
                <div className='innerWidth'>
                    <Bounce duration={2000}>
                        <div className='advisorContainer'>
                            <AdvisorCard />
                            <AdvisorCard />
                            <AdvisorCard />
                            <AdvisorCard />
                        </div>
                    </Bounce>
                </div>
                }
            </div>
        </div>
      </div>
        {/* <div className='center'>
            <div className='width'>
                <div className='center'>
                    <div className='advisorButton'>
                        ADVISOR
                    </div>
                </div>
                <div>
                    <SecondAdvisor/>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Advisor
