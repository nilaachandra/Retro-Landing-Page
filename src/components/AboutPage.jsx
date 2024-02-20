import React from 'react'
import ImageCard from './ImageCard'

const AboutPage = () => {
  return (
    <div className='w-full h-screen flex bg-[#dea350]'>
        <div className="leftside w-1/2 h-full border-2 border-black">
            <ImageCard image="https://images.unsplash.com/photo-1623910270913-3e0294a1c765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className="leftside w-1/2 h-full border-2 border-black p-[6vw]">
            <h1 className='mango text-[9vw] leading-[9vw]'>About</h1>
            <div className='flex flex-col gap-4'>
            <p className="Helvetica italic text-[1.6vw]">
                We are witnessing a huge comeback of vibrant, daring flat designs inspired by the
                70s art movement. Whether simple or more complex, these design composition puts bright
                saturated colors on the pedestal
            </p>
            <p className="Helvetica italic text-[1.6vw]">
                Although bold and quite flashy, the color combinations of the 70s retro flat designs are
                aesthetically pleasing. The colors go well together and manage to balance overall design.
            </p>
            </div>
            
        </div>
    </div>
  )
}

export default AboutPage