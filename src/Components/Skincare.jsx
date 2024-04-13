import React from 'react'

const Skincare = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
    <h1 className='text-4xl py-10 font-bold text-black'>Kaya skin & hair care solutions</h1>
    <div className='flex  px-20 py-8 gap-10'>
        <img className='rounded-full  w-[150px] h-[150px]' src="https://www.kaya.in/media/magearray/news/image/cache/430/Creams_Moisturizers_1.jpg" alt="" />
        <img  className='rounded-full w-[150px] h-[150px] 'src="https://www.kaya.in/media/magearray/news/image/cache/430/Face_Wash_1.jpg" alt="" />
        <img  className='rounded-full w-[150px] h-[150px] 'src="https://i.pinimg.com/564x/65/1b/6c/651b6ceb89808a8cf53025540c16f103.jpg" alt="" />
        <img className='rounded-full w-[150px] h-[150px] ' src="https://i.pinimg.com/564x/8f/ec/67/8fec67a7b63b5a247c0241a9009fc85c.jpg" alt="" />
        <img className='rounded-full  w-[150px] h-[150px]' src="https://i.pinimg.com/236x/98/0c/de/980cdeee6a8edce1473a94f23927a2b7.jpg" alt="" />
    </div>
    </div>
  )
}

export default Skincare