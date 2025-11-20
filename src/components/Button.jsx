import React from 'react'

function Button(props) {
    const {text, func} = props;
  return (
    <div className='flex flex-col gap-10 items-center justify-center text-center max-w-[800px] mx-auto p-4'>
      <button 
        onClick={func}
        className='px-8 py-4 rounded-md border-2 border-solid blueshadow border-blue-400 duration-200' >{text}</button>    
    </div>
  )
}

export default Button