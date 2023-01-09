import React from 'react'

const PreProduction = () => {
    return (
        <div className='relative '>
            <img src="/photo-pre-production.jpg" className='h-[100vh] w-full object-cover' alt="" />
            <div className='absolute top-[50%] border border-l-0 border-r-0 bg-black/80 text-white p-[12.8px] transform translate-y-[-50%] md:flex md:items-center md:gap-[70px] md:py-10'>
                <div>    <h2 className='text-[19px] font-medium lading-[23px] md:basis-[30%] md:text-[22px] md:leading-[26px]'>Pre-Production</h2>
                    <div className='h-[0.6px] bg-white w-[50%] md:w-[100%] mt-[10px] mb-[2px] transform translate-x-[-25px]'></div></div>
                <p className='text-[13px] md:text-[14px] md:leading-[22px] md:basis-[70%] leading-[19px] font-normal text-white/80'>Whether you have a working script that needs polishing or which to start from scratch, we'll collaborate with you to tailor visually effective messages</p>
            </div>
        </div>
    )
}

export default PreProduction