import React, { Suspense } from 'react'
import Footer from "../Component/Footer/footer"
import Loading from '../Loading/loading'
import Header from '../Component/Header/header'
const Game = React.lazy(() => import('../Component/Game/game'));
const About = React.lazy(() => import('../Component/About/about'));
const RoadMap = React.lazy(() => import('../Component/RoadMap/roadmap'));
const Tekonomics = React.lazy(() => import('../Component/Tekonomics/tekonomics'));
const Reward = React.lazy(() => import('../Component/Reward/reward'));
const Advisor = React.lazy(() => import('../Component/Advisor/advisor'));

export default function Index() {
  return (
    <>
    <Header/>
    <Suspense fallback={<Loading/>}>
    <div  style={{
        backgroundImage: "url(/Body.svg)",
        height: "100%",
        marginTop: "-1px",
      }}>
    <About/>
    <Tekonomics/>
    <RoadMap/>
    </div>
    <div style={{backgroundImage:"url(/game.svg)",backgroundSize:"cover",marginTop:-200}}>
    <Game/>
    </div>
    <div style={{marginTop: "-100px",backgroundImage:"url(/footer.svg)",backgroundSize:"cover"}}>
      <Reward/>
      <Advisor/>  
      <Footer/>
    </div>
    </Suspense>
    </>
  )
}
