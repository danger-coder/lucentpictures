import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen bg-red-300 relative'>
      <video className='h-[100vh] w-full object-cover' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/videos/lucent.mp4" autoPlay loop muted></video>
      <div className='absolute right-[5%] bottom-[3%]  w-[60px] h-[60px] cursor-pointer rounded-full flex justify-center items-center bg-[#000]/80'>
       <div className='h-[18px] w-[14px]  border border-[#fff]/80'></div>
      </div>
    </div>
  )
}

export default HeroSection