import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] mx-auto p-4'>
        <div className="flex flex-col gap-4">
           <h2 className='uppercase '>It's time to get</h2>
           <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-[25px]'>HARISH<span className='text-blue-400'>GYM</span></h1>
        </div>
        <p className='text-sm px-[3px] md:text-base font-light'>
            I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably Enormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>and afflicted with severe body dismorphia, unable to fit through doors.
        </p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={'Accept and Begin'}/>
    </div> 
  )
}

export default Hero