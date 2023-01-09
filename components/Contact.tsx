import React from 'react'

const Contact = () => {
    return (
        <div className='relative'>

            <img src="/contact.jpg" className='h-[100vh] w-full object-cover' alt="" />
            <div className='absolute top-0 right-0 border text-white p-[20px] bg-white/10 md:p-[25px]'>

                <h2 className='text-[19px] leading-[23px] font-medium md:text-[22px] md:leading-[26px]'>Contact Us</h2>
                <div className='h-[1px] w-full bg-white my-[12.8px]'></div>
                <div className='text-[13px] leading-[19px] font-normal md:text-[14px] md:leading-[22px]'>
                    <p>Lucent Pictures</p>
                    <p>324 Tusal Marg</p>
                    <p>Kathmandu 7</p>
                    <p>Nepal</p>
                    <p> Email:picllucent@gmail.com</p>
                    <p>Phone:977-1-4493406</p>
                </div>
            </div>
        </div>
    )
}

export default Contact