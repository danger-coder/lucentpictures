import React from 'react'

const Products = () => {
    return (
        <div className='relative'>
            <img src="/photo-products.jpg" alt="" className='h-[100vh] w-full object-cover' />
            <div className='absolute top-[50%] right-[38%] border bg-black/80 text-white p-[20px] transform translate-y-[-50%]'>
                <h2 className='text-[19px] leading-[19px] font-extrabold md:text-[22px] md:leading-[26px]'>Products</h2>
                <div className='h-[1px] w-full bg-white my-[12.8px]'></div>
                <ul className='pl-[40px] text-[13px] leading-[19px] font-medium md:text-[14px] md:leading-[22px] '>
                    <li>Documentaries</li>
                    <li>Ad Films</li>
                    <li>Narratives</li>
                    <li>PR Films</li>
                    <li>English Subtitles</li>
                    <li>Educational Videos</li>
                    <li>PSAs</li>
                    <li>Stock Footage</li>
                </ul>
            </div>
        </div>
    )
}

export default Products