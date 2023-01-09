import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='h-screen bg-red-500 relative'>
      <img src="/photo-what.jpg" alt="" className='h-[100vh] w-full object-cover transform scale-105' />
      <div className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] border border-[#fff] border-r-0 w-full bg-[#000]/80 text-white pl-[20px] py-[3.2px] md:absolute  md:max-w-[650px] md:top-[179px] :md:transform md:translate-x-0 md:translate-y-0 md:right-[0px]  '>
        <h2 className='text-[19px] leading-[23px] font-medium md:text-[22px] md:leading-[26px]'>What we do</h2>
        <div className='h-[1px] w-full bg-[#9c9798] my-[12.8px]'></div>
        <div className='text-[13px] leading-[19px] font-normal text-[#bebaba] md:text-[14px] md:leading-[22px]'>
          <p className='mb-[12.8px] text-[13px] leading-[19px] font-normal'>we are image acquisition specialists with a passion for creative storytelling.</p>
          <p className='text-[13px] leading-[19px] font-normal pb-[12.8px]'>Our products range from feature length documentaries, ad films and narratives to educational videos and PSAs. At Lucent Pictures, we create authentic and compelling videos for the web, television broadcast and theater projection for international film production companies and non-profits . We also deliver industry standard digital film editing , subtitling , transcription, voice-over and dubbing services to select international clients.</p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo