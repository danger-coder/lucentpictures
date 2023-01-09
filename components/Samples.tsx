import React from 'react'


const Samples = () => {



    return (
        <div className=' h-screen flex items-center justify-center overflow-visible relative md:flex md:items-end bg-[#B27234] md:bg-transparent xl:px-[10'>
            <img src="/sample.jpg" className='hidden md:block md:h-[100vh] md:w-full md:object-cover z-[-1] md:absolute' alt="" />
            <div className='w-full '>
                <h2 className='text-[19px] leading-[23px] font-medium text-white my-[19.2px] ml-[10px] md:text-[22px] md:leading-[26px] xl:text-[24px]'>Lucent Samples</h2>
                <div className=' w-full  sample bg-black/50 flex items-center gap-10    overflow-x-scroll snap-x snap-mandatory '>
                    <div className='snap-center w-full'>
                        <iframe src="https://web.archive.org/web/20190311201210if_/https://player.vimeo.com/video/236201499?color=e97234" width="440" height="360"   ></iframe>
                        {/* <div className='bg-black text-white'>
                            <p>International Trade Centre</p>
                        </div> */}
                    </div>
                    <div className='snap-center w-full'>
                        <iframe src="https://web.archive.org/web/20190311201210if_/https://player.vimeo.com/video/236201499?color=e97234" width="440" height="360"   ></iframe>
                    </div>
                    <div className='snap-center w-full'>
                        <iframe src="https://web.archive.org/web/20190311201210if_/https://player.vimeo.com/video/236201499?color=e97234" width="440" height="360"   ></iframe>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Samples