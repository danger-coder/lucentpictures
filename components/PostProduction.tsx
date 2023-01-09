import React from 'react'

const PostProduction = () => {
  return (
    <div className='relative'>
      <img src="/post-production.jpg" className='h-[100vh] w-full object-cover' alt="" />
      <div className='absolute top-[30%] border border-l-0 bg-black/80 text-white p-[12.8px] max-w-[500px] md:top-0'>

        <h2 className='text-[19px] leading-[23px] font-medium mb-[12.8px] md:text-[22px] md:leading-[26px] xl:text-[24px]'>Post-Production</h2>
        <div className='h-[1px] w-full bg-white/60 my-[26px]'></div>
        <p className='text-[13px] font-normal leading-[19px  my-[12.8px] text-white/80 md:text-[14px] md:leading-[22px] xl:text-[16px]'>Lucent Pictures provides state of the art digital editing services to international clients at highly reasonable rates. We edit and produce profile videos, documentaries and 1st Cuts for a wide range of clients. .</p>
      </div>
      <div className='absolute top-[60%] max-w-[480px] border bg-black/80 text-white p-[12.8px] transform right-0 md:top-[30%] md:py-5'>
        <p className='text-[13px] leading-[19px] font-normal text-white/80 pb-[12.8px] md:text-[14px] md:leading-[22px] xl:text-[16px]'>We utilize the best available recording facilities to address your audio needs ranging from sound design, voice-overs and dubbing in English to narration recording and mixing for high budget documentaries.</p>
      </div>
    </div>
  )
}

export default PostProduction