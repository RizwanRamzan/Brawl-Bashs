import Bar from './bar';
import "./index.css";
import Bounce from 'react-reveal/Bounce';


export default function Tekonomics() {
  return (
    <>
    <div id="tekonomics">
        <div className="tekonomicsContainer">
          <Bounce bottom>
          <div id="triangle-topLeft">
            <div className='background' style={{backgroundImage:"url(/path.svg)",width:"75%"}}>
              <center>
                <div>
                  <img src="/pinned.svg"/>
                </div> 
              </center>
              <div className='tokenmics-padding'>
                <div className='tokenmics'>
                  TOKENMICS
                </div>
                <div className='tokenmics-text'>
                  Lorem ipsum = 25%
                  Nulla  facilisi + 5
                  Consectetur adipiscing *22
                  Lorem ipsum = 25%
                  Nam venenatis ultrices -2+9
                </div>
              </div>
            </div>
          </div>
          </Bounce>
          <Bounce top>
            <div id="triangle-topright">
              <div className='center' style={{marginTop:40,marginLeft:50}}>
                <img src='/Group4401.svg' />
              </div>
                <Bar/>
                <Bar/>
                <Bar/>
                <Bar/>
                <Bar/>
                <Bar/>
                <Bar/>
            </div>
            </Bounce>
        </div>
      </div>
    </>
  )
}
