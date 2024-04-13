import React from 'react'

const Content = () => {
  return (
    <div>
    <div className=" flex gap-1 items-center px-24 py-1 justify-between">
        {
            ["aboutus", "Concern", "Aesthetic & Dermatology", "WeightLoss", "Beauty Studio "," Cosmetic sergry", "Media", "Blogs"].map((link,index)=> (
                 <div
                    key={index}
                    className="p-2 text-2xl flex gap-1 hover:bg-richblack-900 hover:text-yellow-25  rounded-md 
                                                transition-all duration-500 "
                 >

                  
                 <p className='flex gap-1 text-gray-500 text-[20px] '>{link}</p>
                   
                 </div>
                  
                ))
        }
    </div>
    </div>
  )
}

export default Content