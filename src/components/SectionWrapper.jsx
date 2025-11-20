import React from 'react'

function SectionWrapper(props) {
    const {children, header, title, id} = props;
  return (
    <section id={id} className=' flex flex-col gap-10 '>
        <div className='bg-slate-950 sm:gap-1 md:gap-2 sm:py-14 md:py-20 py-10 flex flex-col gap-4 justify-center items-center'>
            <p className='uppercase text-lg font-medium'>{header}</p>
            <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='text-blue-400'>{title[1]}</span> {title[2]}</h2>
        </div>

        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'>
        {children}

        </div>
    </section>
  )
}

export default SectionWrapper