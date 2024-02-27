import React from 'react'
import ImageCard from './ImageCard'

function BottomHero() {
  return (
    <div id='workshop' className='w-full lg:h-[92vh] flex flex-col-reverse lg:flex-row bg-[#fff7f1]'>
        <div className="leftside w-full lg:w-1/2 h-full border-2 border-black">
            <ImageCard image="https://images.unsplash.com/photo-1588960546673-192261e93146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJldHJvfGVufDB8fDB8fHww"/>
        </div>
        <div className="leftside w-full lg:w-1/2 lg:h-full border-2 border-black p-[6vw]">
           <p className='Helvetica  text-gray-700 italic text-[4vw] lg:text-[2vw]'>Where?</p>
           <h1 className='mango text-[18vw] leading-[18vw] lg:text-[9vw] lg:leading-[9vw]'>Online</h1>
           <p className='Helvetica text-gray-700 italic text-[4vw] lg:text-[2vw]'>When?</p>
           <h1 className='mango text-[12vw] leading-[12vw] lg:text-[6vw] lg:leading-[6vw]'>08.08.2024</h1>
           <h1 className='mango text-[12vw] leading-[12vw] lg:text-[6vw] lg:leading-[6vw]'>19:00 IST</h1>
           <button className='border-2 Helvetica italic border-black bg-black text-white
            text-[4vw] px-[1.4vw] py-[0.6vw] rounded-xl
            lg:text-[2vw] lg:px-[1.4vw] lg:py-[0.3vw] lg:rounded-3xl mt-[2vw]' >Register</button>
        </div>
    </div>
  )
}

export default BottomHero