import React from 'react'
import ImageCard from './ImageCard'

const AboutPage = () => {
  return (
    <div id='about' className='w-full lg:h-screen h-[40vh] flex flex-col bg-[#dea350] lg:flex-row'>
        <div className="leftside w-full h-full border-2 border-black lg:w-1/2 dv-none">
            <ImageCard className="w-full h-full" image="https://images.unsplash.com/photo-1623910270913-3e0294a1c765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className="leftside w-full h-full border-2 border-black p-[6vw] lg:w-1/2">
            <h1 className='mango text-[16vw] leading-[16vw] lg:text-[9vw] lg:leading-[9vw]'>About</h1>
            <div className='flex flex-col gap-4'>
            <p className="Helvetica italic text-[4vw] lg:text-[1.6vw]">
                We are witnessing a huge comeback of vibrant, daring flat designs inspired by the
                70s art movement. Whether simple or more complex, these design composition puts bright
                saturated colors on the pedestal
            </p>
            <p className="Helvetica italic text-[4vw] lg:text-[1.6vw]">
                Although bold and quite flashy, the color combinations of the 70s retro flat designs are
                aesthetically pleasing. The colors go well together and manage to balance overall design.
            </p>
            </div>
            
        </div>
    </div>
  )
}

export default AboutPage