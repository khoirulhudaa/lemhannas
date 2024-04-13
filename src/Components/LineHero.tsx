import React from 'react'

const LinesHero:React.FC = () => {
  return (
    <>
        <div className='absolute w-[350px] h-[650px] border-[4px] border-white left-[20px] border-opacity-[0.1] border-dashed'>
        </div>
        <div className='absolute w-screen h-[5px] border-[4px] border-white left-[20px] mb-24 border-opacity-[0.1] border-dashed'>
        </div>
        <div className='absolute h-[650px] w-[5px] border-[4px] border-white left-[50%] border-opacity-[0.1] border-dashed'>
        </div>
        <div className='absolute w-[350px] h-[650px] border-[4px] border-white right-[20px] border-opacity-[0.1] border-dashed'>
        </div>
    </>
  )
}

export default LinesHero
