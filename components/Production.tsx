import React from 'react'

const Production = () => {
    return (
        <div className='relative'>
            <img src="/photo-production.jpg" className='h-[100vh] w-full object-cover' alt="" />
            <div className='absolute top-[50%] w-ful border border-r-0 bg-black/80 text-white p-[12.8px] transform translate-y-[-50%] md:top-[19%] md:max-w-[650px] md:right-0 md:py-5'>
                <h2 className='text-[19px] leading-[23px] font-medium md:text-[22px] md:leading-[26px]'>Production</h2>
                <div className='h-[1px] w-full bg-white/60 my-[12.8px]'></div>

                <p className='text-[13px] md:text-[14px] md:leading-[22px] leading-[19px] font-normal mb-[12.8px] text-white/80'>BE it a research driver documentary or a cinematically conceived high-end production-outdoor shooting to any place in Nepal is taken care of by our highly seasoned production team.</p>
                <p className='text-[13px] md:text-[14px] md:leading-[22px] leading-[19px] font-normal mb-[12.8px] text-white/80'>And we also have our studio for professional indoor shoots.</p>

            </div>
        </div>
    )
}

export default Production