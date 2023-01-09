import React from 'react'

const Filming = () => {
    return (
        <div className='relative'>
            <img src="/nepal.jpg" className='w-full h-[100vh] object-cover' alt="" />
            <div className='absolute top-[50%] transform translate-y-[-50%] border bg-black/80 text-white max-w-[520px] md:top-0 md:right-0 md:translate-y-0'>
                <h2 className='text-[19px] font-medium leading-[23px] p-[12.8px] md:text-[22px] md:leading-[26px] xl:text-[24px]'>Filming in Nepal</h2>
                <div className='h-[1px] w-full bg-white/60 my-[12.8px]'></div>
                <p className='text-[13px] leading-[19px] font-normal p-[12.8px] text-white/80 md:text-[14px] md:leading-[22px] xl:text-[16px]'>We are your one stop solution for filming in Nepal. Unlike other companies that are off-shoots of the travel/ tourism sector or only geared towards logistics and management- Lucent takes pride in producing films with international production value. Our three decade long experience along with extensive national/ international networking capabilities sets us apart as a genuine film production company that can address your specific needs and requirements.</p>
            </div>
        </div>
    )
}

export default Filming