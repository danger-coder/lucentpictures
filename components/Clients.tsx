import React from 'react'

const Clients = () => {
    return (
        <div className='overflow-y-scroll bg-white relative'>
            <h2 className='text-center pt-[80px] mb-[25px] text-[19px] leading-[23px] font-normal text-[#212529] md:p-0 absolute top-[15.5rem] left-[50%] transform translate-x-[-50%]'>Our Clients</h2>
            <div className='grid-cols-2 grid client gap-10 p-[40px] sm:p-[80px] h-screen overflow-y-scroll pb-[150px] sm:pb-[200px] scrollbar scrollbar-thumb-[#B27234] scrollbar-track-red-100 scrollbar-thin scrollbar-rounded pr-10 md:hidden'>
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/itc-logo.jpg" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/un-logo.png" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/UNCDF-logo.png" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/savethechildren.png" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/samridha-pahad-logo.png" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/ICM-logo.png" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/musci-center-logo.png" alt="" />
                <img src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/welcome-logo.png" alt="" />
            </div>

            <div className='hidden md:flex overflow-scroll items-center justify-between px-[43px] h-screen'>
                <div className='grid grid-cols-2 gap-5'>
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/itc-logo.jpg" alt="" />
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/un-logo.png" alt="" />

                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/UNCDF-logo.png" alt="" />
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/savethechildren.png" alt="" />

                </div>
                <img className='w-[307px] h-[307px]' src="https://web.archive.org/web/20181126014216im_/http://lucentpics.com/assets/images/Client-Background-Photo.jpeg" alt="" />
                <div className='grid grid-cols-2 gap-5'>
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/samridha-pahad-logo.png" alt="" />
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/ICM-logo.png" alt="" />
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/musci-center-logo.png" alt="" />
                    <img className='w-16 h-16 object-contain' src="https://web.archive.org/web/20190311201210im_/http://www.lucentpics.com/assets/lucent-logos/welcome-logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Clients